const data = {'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', 'Unknown'], 'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', 'Unknown'], 'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', 'Unknown'], 'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free', 'Unknown'], 'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle', 'Unknown'], 'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Free', 'Free', 'Tsaccounis', 'Tsaccounis', 'Free'], 'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown']};

const subjects = {
  "Jones": "Mathematics Advanced & Extension",
  "Treleaven": "English Advanced",
  "Clarke": "Economics",
  "Bullock": "Biology",
  "Ireland": "Legal Studies",
  "McGavock": "Chemistry",
  "Jones-ext": "Mathematics Advanced & Extension",
  "Richmond": "English Standard",
  "Richmond-drama": "Drama",
  "Hirsch": "French",
  "Rayment": "Chemistry",
  "Free": "Study",
  "Offner": "Studies Of Religon",
  "Unity": "Mathematics Advanced",
  "Marsh": "Software Engineering",
  "Smith": "Physics",
  "Naito": "Japanese",
  "Tsaccounis": "Business Studies",
  "Penn": "English Advanced",
  "Penn-ext": "English Extension",
  "Treleaven-ext": "English Extension",
  "Treleaven & Penn-ext": "English Extension",
  "Herrman": "Physics",
  "Woodley-phys": "Physics",
  "Emaneni": "Enterprise Computing",
  "White": "English Advanced",
  "Silibek": "Chemistry",
  "Tweddle": "Health & Movement Science",
  "Doyle": "Biology",
  "Phelps": "English Advanced",
  "Parkinson": "Biology",
  "Vyas": "Mathematics Advanced & Extension",
  "Taylor": "Engineering",
  "Groves": "Design & Technology",
  "Vyas-ext": "Mathematics Advanced & Extension",
  "Black-ext": "Mathematics Advanced & Extension",
  "Court": "English Advanced",
  "Black": "Mathematics Advanced & Extension",
  "Heka": "Modern History",
  "Moller": "German",
  "Foran": "Business Studies",
  "Weekes": "Mathematics Standard",
  "Metson": "Society & Culture",
  "Phelps-anc": "Ancient History",
  "Limbrey": "Geography",
  "Robinson": "Mathematics Advanced & Extension",
  "Robinson-ext": "Mathematics Advanced & Extension",
  "Wellings": "Music",
  "Woodley": "Mathematics Advanced",
  "Milnes": "Visual Art"
};

let guesses = 5;

function removeAGuess() {
    guesses--;
    const guessP = document.getElementById('guessP');
    const dotsSpan = guessP.querySelector('.dots');
    if (dotsSpan) {
        dotsSpan.textContent = '•'.repeat(guesses) + '·'.repeat(5 - guesses);
    }
    if (window.location.pathname.includes('/subjections/daily')) {
        saveGameStateSubjections();
    }
}

function deselectAll() {
    document.querySelectorAll('.cell-button').forEach(button => {
        if (button.classList.contains('toggle')) {
            button.classList.remove('toggle');
        }
        window.toggledCount = 0;
    });
}

function shuffleBoard() {
    const cells = Array.from(document.querySelectorAll('#board td'));
    const buttons = cells.map(cell => cell.querySelector('button'));

    const enabledButtons = buttons.filter(btn => !btn.disabled);
    const disabledButtons = buttons.filter(btn => btn.disabled);

    const positions = new Map();
    buttons.forEach(btn => {
        positions.set(btn, btn.getBoundingClientRect());
    });

    for (let i = enabledButtons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [enabledButtons[i], enabledButtons[j]] = [enabledButtons[j], enabledButtons[i]];
    }

    const merged = [];
    let enabledIndex = 0, disabledIndex = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled) {
            merged.push(disabledButtons[disabledIndex++]);
        } else {
            merged.push(enabledButtons[enabledIndex++]);
        }
    }

    merged.forEach((btn, i) => {
        cells[i].appendChild(btn);
    });

    buttons.forEach(btn => {
        const oldRect = positions.get(btn);
        const newRect = btn.getBoundingClientRect();
        const dx = oldRect.left - newRect.left;
        const dy = oldRect.top - newRect.top;

        btn.style.transition = 'none';
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    requestAnimationFrame(() => {
        buttons.forEach(btn => {
            btn.style.transition = 'transform 0.4s ease';
            btn.style.transform = '';
        });
    });
    if (window.location.pathname.includes('/subjections/daily')) {
        saveGameStateSubjections();
    }

}

let numCorrect = 0;

let guessLog = [];

window.answeredYet = false;

function submitGuess() {
    if (window.location.pathname.includes('/subjections/infinite') && guesses === 5 && !window.answeredYet) {
      updateHistogram(0);
      answeredYet = true;
    }
    const selectedButtons = Array.from(document.querySelectorAll('.cell-button.toggle'));
    if (selectedButtons.length !== 4) return;

    const selectedNames = selectedButtons.map(btn => btn.textContent);

    function arraysEqualUnordered(a, b) {
        if (a.length !== b.length) return false;
        const setA = new Set(a), setB = new Set(b);
        for (const x of setA) if (!setB.has(x)) return false;
        return true;
    }

    function containsArray(arrayOfArrays, targetArray) {
        return arrayOfArrays.some(arr => arraysEqualUnordered(arr, targetArray));
    }

    const isDaily = window.location.pathname.includes('/subjections/daily');
    const snackbar = document.getElementById("snackbar");

    if (containsArray(guessLog, selectedNames)) {
        snackbar.textContent = "Combination already guessed!";
        snackbar.className = "show";
        setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
        return;
    }

    guessLog.push(selectedNames);
    if (isDaily) saveGameStateSubjections();

    let correctClass = null;
    let classGroups = {};

    if (isDaily) {
        const selectedGroups = JSON.parse(getCookie("selectedGroupsSubjections") || "[]");

        const guessCorrect = selectedGroups.find(g => arraysEqualUnordered(g.students, selectedNames));
        const guessOneAway = selectedGroups.some(g => {
            const a = new Set(g.students);
            const b = new Set(selectedNames);
            let match = 0;
            for (const x of a) if (b.has(x)) match++;
            return match === 3;
        });


        if (!guessCorrect) {
            if (guessOneAway) {
                snackbar.textContent = "One away!";
                snackbar.className = "show";
                setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
            }
            removeAGuess();
            if (guesses === 0) loseGame();
            return;
        }

        correctClass = guessCorrect.class;
        classGroups[correctClass] = guessCorrect.students;


    } else {
        const studentToClass = {};
        for (const { name, cls } of selectedStudents) {
            studentToClass[name] = cls;
        }

        for (const name of selectedNames) {
            const cls = studentToClass[name];
            if (!classGroups[cls]) classGroups[cls] = [];
            classGroups[cls].push(name);
        }

        for (const [cls, group] of Object.entries(classGroups)) {
            if (group.length === 4) {
                correctClass = cls;
                break;
            }
        }

        const guessOneAway = Object.values(classGroups).some(group => {
            const a = new Set(group);
            const b = new Set(selectedNames);
            let match = 0;
            for (const x of a) if (b.has(x)) match++;
            return match === 3;
        });

        if (guessOneAway) {
            snackbar.textContent = "One away!";
            snackbar.className = "show";
            setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
            
            removeAGuess();
            if (guesses === 0) loseGame();

            return;  
        }

    }

    if (correctClass) {
        selectedButtons.forEach(btn => {
            btn.classList.remove('toggle');
            btn.classList.add('correct');
            btn.disabled = true;
        });

        const correctGroupNames = new Set(classGroups[correctClass]);

        const currentlyCorrectNames = new Set(
            Array.from(document.querySelectorAll('.cell-button.correct')).map(btn => btn.textContent)
        );

        correctGroupNames.forEach(name => currentlyCorrectNames.add(name));

        const correctStudents = selectedStudents.filter(s => currentlyCorrectNames.has(s.name));
        const restStudents = selectedStudents.filter(s => !currentlyCorrectNames.has(s.name));

        const newCorrectStudents = [...correctGroupNames].map(name => correctStudents.find(s => s.name === name)).filter(Boolean);
        const remainingCorrectStudents = correctStudents.filter(s => !correctGroupNames.has(s.name));

        selectedStudents = [...newCorrectStudents, ...remainingCorrectStudents, ...restStudents];

        const oldButtons = Array.from(document.querySelectorAll('.cell-button'));
        const oldPositions = new Map();
        oldButtons.forEach(btn => {
            oldPositions.set(btn.textContent, btn.getBoundingClientRect());
        });

        table.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                const index = i * 4 + j;
                const { name, cls } = selectedStudents[index];
                const cell = document.createElement('td');

                const button = document.createElement('button');
                button.textContent = name;
                button.className = 'cell-button';

                if (currentlyCorrectNames.has(name)) {
                    button.classList.add('correct');
                    button.disabled = true;
                    if (!correctGroupNames.has(name)) {
                        button.style.opacity = '0';
                    } else {
                        setTimeout(() => {
                            button.style.opacity = '0';
                        }, 400);
                    }
                }

                button.addEventListener('click', () => {
                    if (button.classList.contains('toggle')) {
                        button.classList.remove('toggle');
                        toggledCount--;
                    } else {
                        if (toggledCount < 4) {
                            button.classList.add('toggle');
                            toggledCount++;
                        }
                    }
                    document.getElementById('submitButton').disabled = (toggledCount !== 4);
                    document.getElementById('deselectButton').disabled = (toggledCount === 0);
                });

                cell.appendChild(button);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        requestAnimationFrame(() => {
            const newButtons = Array.from(document.querySelectorAll('.cell-button'));
            newButtons.forEach(btn => {
                const oldRect = oldPositions.get(btn.textContent);
                if (!oldRect) return;

                const newRect = btn.getBoundingClientRect();
                const dx = oldRect.left - newRect.left;
                const dy = oldRect.top - newRect.top;

                btn.style.transition = 'none';
                btn.style.transform = `translate(${dx}px, ${dy}px)`;
            });

            requestAnimationFrame(() => {
                newButtons.forEach(btn => {
                    btn.style.transition = 'transform 0.4s ease';
                    btn.style.transform = '';
                });
            });
        });

        numCorrect++;
        setTimeout(() => {
            shiftOverlaysDown();
            const newOverlay = document.getElementById('CorrectOverlay' + numCorrect);
            const className = subjects[correctClass] || correctClass;
            newOverlay.querySelector('h').textContent = `${className} - ${correctClass.replace('-ext', '').replace('-drama', '').replace('-anc', '').replace('-phys', '')}`;
            newOverlay.querySelector('p').textContent = `${classGroups[correctClass].join(", ")}`;
            newOverlay.classList.remove('hidden');
            newOverlay.classList.add('visible');
            newOverlay.style.top = '14.8%';
        }, 200);

        toggledCount = 0;
        document.getElementById('submitButton').disabled = true;
        document.getElementById('deselectButton').disabled = true;
    } else {
        removeAGuess();
    }

    if (numCorrect === 4) winGame(guesses);
    if (guesses === 0) loseGame();
    if (isDaily) saveGameStateSubjections();
}

const overlayShiftPercent = 11.1; 

function shiftOverlaysDown() {
  const overlays = document.querySelectorAll('.correctOverlay.visible');
  overlays.forEach(el => {
    const currentTop = parseFloat(el.style.top) || 0;
    el.style.top = (currentTop + overlayShiftPercent) + '%';
  });
}

function winGame(guessNum) {
    if (window.location.pathname.includes('/subjections/daily')) {
        updateWinstreak();
        setCookie("lastWinSubjections", daysSinceEpoch, 30);
    }

    if (window.location.pathname.includes('/subjections/infinite')) {
        removeFailedHistogram();
    }
    
    document.getElementById('shuffleButton').disabled = true;
    updateHistogram(guessNum);
    const winPopup = document.getElementById('winPopup');
    winPopup.querySelector('p').textContent = `You won with ${guessNum} ` + (guessNum == 1 ? `guess` : `guesses`) +` to spare!`;
    renderHistogram("winHistogram");
    winPopup.style.display = "block";
    window.answeredYet = false;
}

function loseGame() {
    document.querySelectorAll('.cell-button').forEach(btn => btn.classList.remove('toggle'));

    const classGroups = {};
    for (const { name, cls } of selectedStudents) {
        if (!classGroups[cls]) classGroups[cls] = [];
        classGroups[cls].push(name);
    }

    const correctClassNames = Object.entries(classGroups)
        .filter(([cls, names]) => names.length === 4)
        .filter(([cls, names]) => {
            const revealed = Array.from(document.querySelectorAll('.cell-button.correct'))
                .map(b => b.textContent);
            return !names.every(n => revealed.includes(n));
        })
        .map(([cls]) => cls);

    const existingButtons = Array.from(document.querySelectorAll('.cell-button'));
    const nameToButton = new Map(existingButtons.map(b => [b.textContent, b]));
    window.loseClassSequence = [...correctClassNames];
    const table = window.table;

    if (!document.getElementById('faded-button-style')) {
        const style = document.createElement('style');
        style.id = 'faded-button-style';
        style.textContent = `
            .faded-button {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    async function revealNext(cls) {
        const group = classGroups[cls];

        group.forEach(name => {
            const btn = nameToButton.get(name);
            btn.classList.add('correct');
            btn.disabled = true;
        });

        const newCorrect = group.map(n => selectedStudents.find(s => s.name === n));
        const rest = selectedStudents.filter(s => !group.includes(s.name));
        selectedStudents = [...newCorrect, ...rest];

        const oldRects = new Map();
        existingButtons.forEach(btn => {
            oldRects.set(btn.textContent, btn.getBoundingClientRect());
        });

        const cells = Array.from(table.querySelectorAll('td'));
        selectedStudents.forEach((s, idx) => {
            const btn = nameToButton.get(s.name);
            cells[idx].appendChild(btn);
        });

        existingButtons.forEach(btn => {
            const oldRect = oldRects.get(btn.textContent);
            const newRect = btn.getBoundingClientRect();
            const dx = oldRect.left - newRect.left;
            const dy = oldRect.top - newRect.top;
            btn.style.transition = 'none';
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });

        return new Promise(resolve => {
            requestAnimationFrame(() => {
                existingButtons.forEach(btn => {
                    btn.style.transition = 'transform 0.4s ease';
                    btn.style.transform = '';
                });
                
                setTimeout(() => {
                    group.forEach(name => {
                        const btn = nameToButton.get(name);
                        btn.classList.add('faded-button');
                    });

                    shiftOverlaysDown();

                    const visibleCount = document.querySelectorAll('.correctOverlay.visible').length;

                    const overlay = document.getElementById('CorrectOverlay' + (visibleCount + 1));

                    overlay.querySelector('h').textContent = subjects[cls] + ' – ' + cls.replace(/-ext|-drama|-anc/g, '');
                    overlay.querySelector('p').textContent = group.join(', ');
                    overlay.classList.remove('hidden');
                    overlay.classList.add('visible');
                    overlay.style.top = '14.8%';


                    setTimeout(resolve, 400);
                }, 300);
            });
        });
    }

    async function revealAllAndSave() {
        for (const cls of loseClassSequence) {
            await revealNext(cls);
        }
    }

    document.getElementById('submitButton').disabled = true;
    document.getElementById('deselectButton').disabled = true;
    document.getElementById('shuffleButton').disabled = true;

    revealAllAndSave();

    if (window.location.pathname.includes('/subjections/daily')) {
        numCorrect = 4;
        updateHistogram(0);
        saveGameStateSubjections();
    }
    renderHistogram("gameOverHistogram");
    document.getElementById('gameOverPopup').style.display = 'block';
    window.answeredYet = false;
}

function closeWinPopup() {
  document.getElementById('winPopup').style.display = 'none';
}

function closeGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
}

function showWelcome() {
    document.getElementById('welcomePopup').style.display = 'block';
}
