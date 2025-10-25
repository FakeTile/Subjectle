const daysSinceEpoch = getDaysSinceEpoch(new Date());
const rngToday = mulberry32(daysSinceEpoch);

function makeBoard() {
  window.table = document.getElementById('board');
  window.inList = [];

  function baseClass(cls) {
    if (cls === 'Herrman') return 'Woodley-phys';
    if (cls === 'Treleaven-ext' || cls === 'Penn-ext') return 'Treleaven & Penn-ext';
    if (cls.endsWith('-ext')) return cls;
    return cls;
  }
  function getClassCategory(cls) {
    if (cls === 'Treleaven & Penn-ext') return 'english';
    const subject = subjects[cls] || '';
    if (subject.includes('Mathematics')) return 'maths';
    if (subject.includes('English')) return 'english';
    if (subject.includes('-ext')) return 'extension';
    return 'elective';
  }
  function getBaseName(name) {
    const baseNames = ['Jones', 'Black', 'Vyas', 'Robinson'];
    for (const base of baseNames) if (name === base || name === base + '-ext') return base;
    return null;
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rngToday() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  const studentNames = Object.keys(data);
  const nStudents = studentNames.length;
  const studentIndex = {};
  for (let i = 0; i < nStudents; i++) studentIndex[studentNames[i]] = i;

  const classMapRaw = {};
  for (const name of studentNames) {
    for (let cls of data[name]) {
      if (cls === 'Free' || cls === 'Unknown') continue;
      cls = baseClass(cls);
      (classMapRaw[cls] || (classMapRaw[cls] = new Set())).add(studentIndex[name]);
    }
  }
  const classNames = Object.keys(classMapRaw);
  const classIndex = {};
  for (let i = 0; i < classNames.length; i++) classIndex[classNames[i]] = i;
  const nClasses = classNames.length;

  const classStudents = new Array(nClasses);
  for (let i = 0; i < nClasses; i++) classStudents[i] = Array.from(classMapRaw[classNames[i]]);

  const studentClasses = Array.from({ length: nStudents }, () => []);
  for (let s = 0; s < nStudents; s++) {
    const name = studentNames[s];
    for (const raw of data[name]) {
      if (raw === 'Free' || raw === 'Unknown') continue;
      const bc = baseClass(raw);
      const cid = classIndex[bc];
      if (cid !== undefined) studentClasses[s].push(cid);
    }
  }

  const studentBase = new Array(nStudents);
  for (let s = 0; s < nStudents; s++) studentBase[s] = getBaseName(studentNames[s]);

  const candidates = [];
  for (let cid = 0; cid < nClasses; cid++) if (classStudents[cid].length >= 4) candidates.push(cid);

  function* kCombIndices(n, k) {
    if (k > n) return;
    const idx = Array.from({ length: k }, (_, i) => i);
    while (true) {
      yield idx.slice();
      let i = k - 1;
      while (i >= 0 && idx[i] === i + n - k) i--;
      if (i < 0) break;
      idx[i]++;
      for (let j = i + 1; j < k; j++) idx[j] = idx[j - 1] + 1;
    }
  }

  const MAX_COMBOS_PER_CLASS_PRE = 800;
  const MAX_COMBOS_PER_CLASS_TRY = 150;
  const combosPerClassBase = new Map();
  for (const cid of candidates) {
    const pool = classStudents[cid].slice();
    pool.sort((a, b) => studentClasses[a].length - studentClasses[b].length);
    const combos = [];
    let genCount = 0;
    for (const idxArr of kCombIndices(pool.length, 4)) {
      genCount++;
      if (genCount > 8000) break;
      const combo = idxArr.map(i => pool[i]);
      const seenBases = new Set();
      let dup = false;
      for (const s of combo) {
        const b = studentBase[s];
        if (b) {
          if (seenBases.has(b)) { dup = true; break; }
          seenBases.add(b);
        }
      }
      if (dup) continue;
      const counts = new Uint8Array(nClasses);
      for (const s of combo) for (const c of studentClasses[s]) counts[c]++;
      let score = 0;
      for (let c = 0; c < nClasses; c++) if (c !== cid && counts[c]) score += counts[c];
      combos.push({ students: combo, counts, score });
      if (combos.length >= MAX_COMBOS_PER_CLASS_PRE) break;
    }
    combos.sort((a, b) => a.score - b.score);
    combosPerClassBase.set(cid, combos);
  }

  const viableClassesBase = candidates.filter(cid => (combosPerClassBase.get(cid) || []).length > 0);

  const usedStudentFlag = new Uint8Array(nStudents);
  const pickedClassCounts = new Uint8Array(nClasses);
  const usedBaseCount = {};
  const pickedGroups = [];

  function canPlaceCombo(comboObj, targetCid) {
    for (const s of comboObj.students) if (usedStudentFlag[s]) return false;
    for (const s of comboObj.students) {
      const b = studentBase[s];
      if (b && (usedBaseCount[b] || 0) > 0) return false;
    }
    const counts = comboObj.counts;
    for (let c = 0; c < nClasses; c++) {
      const inc = counts[c];
      if (!inc) continue;
      const after = pickedClassCounts[c] + inc;
      if (c === targetCid) {
        if (after > 4) return false;
      } else {
        if (after > 3) return false;
      }
    }
    for (const s of comboObj.students) {
      for (const g of pickedGroups) if (studentClasses[s].includes(g.cid)) return false;
    }
    for (const g of pickedGroups) {
      for (const prevS of g.comboObj.students) if (studentClasses[prevS].includes(targetCid)) return false;
    }
    return true;
  }
  function applyCombo(comboObj, targetCid) {
    for (const s of comboObj.students) {
      usedStudentFlag[s] = 1;
      const b = studentBase[s];
      if (b) usedBaseCount[b] = (usedBaseCount[b] || 0) + 1;
      for (const c of studentClasses[s]) pickedClassCounts[c] += 1;
    }
    pickedGroups.push({ cid: targetCid, comboObj });
  }
  function revertCombo(comboObj, targetCid) {
    for (const s of comboObj.students) {
      usedStudentFlag[s] = 0;
      const b = studentBase[s];
      if (b) {
        const v = (usedBaseCount[b] || 1) - 1;
        if (v <= 0) delete usedBaseCount[b];
        else usedBaseCount[b] = v;
      }
      for (const c of studentClasses[s]) pickedClassCounts[c] -= 1;
    }
    pickedGroups.pop();
  }
  function validatePartial() {
    for (let i = 0; i < pickedGroups.length; i++) {
      const A = pickedGroups[i];
      for (const s of A.comboObj.students) {
        for (let j = 0; j < pickedGroups.length; j++) {
          if (i === j) continue;
          const B = pickedGroups[j];
          if (studentClasses[s].includes(B.cid)) return false;
        }
      }
    }
    for (let c = 0; c < nClasses; c++) {
      let isTarget = false;
      for (const g of pickedGroups) if (g.cid === c) { isTarget = true; break; }
      const cnt = pickedClassCounts[c];
      if (isTarget) {
        if (cnt > 4) return false;
      } else {
        if (cnt >= 4) return false;
      }
    }
    return true;
  }

  const NODE_LIMIT = 160000;
  let nodes = 0;

  function backtrack(classOrder, currentCombos, pos) {
    if (pickedGroups.length === 4) return true;
    if (++nodes > NODE_LIMIT) return false;

    for (let i = pos; i < classOrder.length; i++) {
      const cid = classOrder[i];
      let conflict = false;
      for (const s of classStudents[cid]) {
        if (usedStudentFlag[s]) {
          conflict = true;
          break;
        }
      }
      if (conflict) continue;

      const combos = currentCombos.get(cid) || [];
      const limit = Math.min(combos.length, MAX_COMBOS_PER_CLASS_TRY);
      for (let ci = 0; ci < limit; ci++) {
        const comboObj = combos[ci];
        if (!canPlaceCombo(comboObj, cid)) continue;
        applyCombo(comboObj, cid);
        if (!validatePartial()) {
          revertCombo(comboObj, cid);
          continue;
        }
        if (backtrack(classOrder, currentCombos, i + 1)) return true;
        revertCombo(comboObj, cid);
        if (++nodes > NODE_LIMIT) return false;
      }
    }
    return false;
  }

  const weightedClasses = [];
  for (const cls of classNames) {
    const cat = getClassCategory(cls);
    if (cat === 'elective') {
      weightedClasses.push(cls);
    } else {
      if (rngToday() < 0.5) weightedClasses.push(cls);
    }
  }

  const viableClassesBaseFiltered = viableClassesBase.filter(cid => weightedClasses.includes(classNames[cid]));

  const viableClasses = seededShuffle(viableClassesBaseFiltered.slice(), daysSinceEpoch);

  let found = false;
  const MAX_ATTEMPTS = 25;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const currentCombos = new Map();
    for (const cid of viableClasses) {
      const baseCombos = combosPerClassBase.get(cid) ? combosPerClassBase.get(cid).slice() : [];
      const take = Math.min(baseCombos.length, MAX_COMBOS_PER_CLASS_PRE);
      const grabbed = baseCombos.slice(0, take);
      shuffle(grabbed);
      currentCombos.set(cid, grabbed);
    }
    shuffle(viableClasses);

    nodes = 0;
    usedStudentFlag.fill(0);
    pickedClassCounts.fill(0);
    for (const k of Object.keys(usedBaseCount)) delete usedBaseCount[k];
    pickedGroups.length = 0;

    if (backtrack(viableClasses, currentCombos, 0)) {
      found = true;
      break;
    }
  }

  window.selectedStudents = [];
  for (const g of pickedGroups) {
    const cname = classNames[g.cid];
    for (const sid of g.comboObj.students) window.selectedStudents.push({ name: studentNames[sid], cls: cname });
  }

  (function verify() {
    const seen = new Set();
    for (const sObj of window.selectedStudents) {
      seen.add(sObj.name);
    }
    for (const g of pickedGroups) {
      for (const s of g.comboObj.students) {
        for (const other of pickedGroups) {
          if (other === g) continue;
        }
      }
    }
    const counts = {};
    for (const sObj of window.selectedStudents) {
      for (const raw of data[sObj.name]) {
        if (raw === 'Free' || raw === 'Unknown') continue;
        const bc = baseClass(raw);
        counts[bc] = (counts[bc] || 0) + 1;
      }
    }
  })();

  for (let i = window.selectedStudents.length - 1; i > 0; i--) {
    const j = Math.floor(rngToday() * (i + 1));
    [window.selectedStudents[i], window.selectedStudents[j]] = [window.selectedStudents[j], window.selectedStudents[i]];
  }

  const table = document.getElementById('board');
  table.innerHTML = '';
  window.toggledCount = 0;
  for (let i = 0; i < 4; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
      const idx = i * 4 + j;
      const name = window.selectedStudents[idx] ? window.selectedStudents[idx].name : '';
      const cell = document.createElement('td');
      const btn = document.createElement('button');
      btn.className = 'cell-button';
      btn.textContent = name;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('toggle')) {
          btn.classList.remove('toggle');
          window.toggledCount--;
        } else if (window.toggledCount < 4) {
          btn.classList.add('toggle');
          window.toggledCount++;
        }
        document.getElementById('submitButton').disabled = window.toggledCount !== 4;
        document.getElementById('deselectButton').disabled = window.toggledCount === 0;
      });
      cell.appendChild(btn);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  setCookie("selectedGroupsSubjections", JSON.stringify(pickedGroups.map(g => ({
    class: classNames[g.cid],
    students: g.comboObj.students.map(i => studentNames[i])
  }))), 1);
}

