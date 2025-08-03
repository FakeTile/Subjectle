const names = seededShuffle(Object.keys(data), "mudgil");

function makeBoard() {
    window.table = document.getElementById('board');
    window.inList = [];

    function baseClass(cls) {
        if (cls === 'Treleaven-ext' || cls === 'Penn-ext') return 'Treleaven & Penn-ext';
        if (cls.endsWith('-ext')) return cls;
        return cls;
    }

    function getClassCategory(cls) {
        if (cls === 'Treleaven & Penn-ext') return 'english';

        const subject = subjects[cls] || '';
        if (subject.includes('Mathematics')) return 'maths';
        if (subject.includes('English')) return 'english';
        return 'elective';
    }

    const classIndices = {};
    for (const [name, classes] of Object.entries(data)) {
        classes.forEach((cls, idx) => {
            if (!classIndices[cls]) classIndices[cls] = new Set();
            classIndices[cls].add(idx);
        });
    }

    const classMapRaw = {};
    for (const [name, classes] of Object.entries(data)) {
        for (let cls of classes) {
            if (cls === 'Free') continue;
            cls = baseClass(cls);
            if (!classMapRaw[cls]) classMapRaw[cls] = new Set();
            classMapRaw[cls].add(name);
        }
    }

    const classMap = {};
    for (const [cls, studentsSet] of Object.entries(classMapRaw)) {
        classMap[cls] = Array.from(studentsSet);
    }

    const weightedClasses = [];
    for (const cls of Object.keys(classMap)) {
        const cat = getClassCategory(cls);
        if (cat === 'elective') {
            weightedClasses.push(cls);
        } else {
            if (Math.random() < 0.5) weightedClasses.push(cls);
        }
    }
    weightedClasses.sort(() => Math.random() - 0.5);

    function numSharedClasses(students) {
        const counts = {};
        for (const student of students) {
            const classes = data[student];
            for (let cls of classes) {
                if (cls === 'Free') continue;
                cls = baseClass(cls);
                counts[cls] = (counts[cls] || 0) + 1;
            }
        }
        let total = 0;
        for (const val of Object.values(counts)) {
            if (val === 4) total++;
        }
        return total;
    }

    const usedStudents = new Set();
    const usedBases = new Set();
    window.selectedStudents = [];
    const selectedGroups = [];

    function getBaseName(name) {
        const baseNames = ['Jones', 'Black', 'Vyas', 'Robinson'];
        for (const base of baseNames) {
            if (name === base || name === base + '-ext') return base;
        }
        return null;
    }

    let classIndex = 0;
    while (selectedGroups.length < 4 && classIndex < weightedClasses.length) {
        const cls = weightedClasses[classIndex];

        const pool = classMap[cls].filter(name => {
            if (usedStudents.has(name)) return false;
            const base = getBaseName(name);
            if (base && usedBases.has(base)) return false;

            const indices = classIndices[cls];
            if (!indices) return false;

            const classes = data[name];
            for (const idx of indices) {
                if (classes[idx] === cls || baseClass(classes[idx]) === cls) return true;
            }
            return false;
        });

        if (pool.length < 4) {
            classIndex++;
            continue;
        }

        let validGroup = null;
        for (let tries = 0; tries < 25; tries++) {
            const sample = [];
            const copy = [...pool];
            while (sample.length < 4 && copy.length > 0) {
                const idx = Math.floor(Math.random() * copy.length);
                sample.push(copy.splice(idx, 1)[0]);
            }
            if (sample.length === 4 && numSharedClasses(sample) <= 2) {
                validGroup = sample;
                break;
            }
        }

        if (!validGroup) {
            classIndex++;
            continue;
        }

        selectedGroups.push([...validGroup, cls]);
        for (const name of validGroup) {
            usedStudents.add(name);
            const base = getBaseName(name);
            if (base) usedBases.add(base);
        }
        classIndex++;
    }

    for (const group of selectedGroups) {
        const cls = group[4];
        for (let i = 0; i < 4; i++) {
            window.selectedStudents.push({ name: group[i], cls });
        }
    }

    for (let i = selectedStudents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [window.selectedStudents[i], window.selectedStudents[j]] = [window.selectedStudents[j], window.selectedStudents[i]];
    }

    table.innerHTML = '';
    window.toggledCount = 0;

    for (let i = 0; i < 4; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            const index = i * 4 + j;
            const { name } = selectedStudents[index];
            const cell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = name;
            button.className = 'cell-button';

            button.addEventListener('click', () => {
                if (button.classList.contains('toggle')) {
                    button.classList.remove('toggle');
                    toggledCount--;
                } else if (toggledCount < 4) {
                    button.classList.add('toggle');
                    toggledCount++;
                }
                document.getElementById('submitButton').disabled = toggledCount !== 4;
                document.getElementById('deselectButton').disabled = toggledCount === 0;
            });

            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

makeBoard();

function resetGame() {
    guesses = 5;
    numCorrect = 0;
    guessLog = [];

    document.getElementById('submitButton').disabled = true;
    document.getElementById('deselectButton').disabled = true;
    document.getElementById('shuffleButton').disabled = false;

    document.getElementById('guessP').querySelector('.dots').textContent = '•••••';

    for (let i = 1; i <= 4; i++) {
        const overlay = document.getElementById('CorrectOverlay' + i);
        if (overlay) {
            overlay.classList.remove('visible');
            overlay.classList.add('hidden');
            overlay.querySelector('h').textContent = '';
            overlay.querySelector('p').textContent = '';
            overlay.style.top = '14.8%';
        }
    }

    const fadedButtons = document.querySelectorAll('.cell-button.faded-button');
    fadedButtons.forEach(btn => btn.classList.remove('faded-button'));

    const correctButtons = document.querySelectorAll('.cell-button.correct');
    correctButtons.forEach(btn => {
        btn.classList.remove('correct');
        btn.disabled = false;
        btn.style.opacity = '';
    });

    makeBoard();
}
