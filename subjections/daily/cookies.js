function isStreak(today, prev) {
    /* 
    Returns true if the 2 days meet streak requirements
    */
    const between = today - prev;
        
    // if there has been 1 day between today and last win, 
    // or three days but its a monday 
    return (between === 1 || (between < 4 && (today % 7 == 1)));
}

function initWinstreak() {
    const lastWinDate = getCookie("lastWinSubjections");
    const today = getDaysSinceEpoch(new Date());;
    if (isStreak(today, lastWinDate)) {
        unfilledStreak.textContent = getCookie("winStreakSubjections");
    } else if (today - lastWinDate === 0) {
        filledStreak.textContent = getCookie("winStreakSubjections");
    } else {
        unfilledStreak.textContent = 0;
    }
}

const filledStreak = document.querySelector('.streak-filled');
const unfilledStreak = document.querySelector('.streak-unfilled');

function updateWinstreak() {
    const today = getDaysSinceEpoch(new Date());

    const lastWin = getCookie("lastWinSubjections");
    const winStreakStr = getCookie("winStreakSubjections");

    let streak = parseInt(winStreakStr || '0', 10);

    if (lastWin) {
        if (isStreak(today, lastWin)) {
            streak += 1;
        } else {
            streak = 1;
        }

    } else {
        streak = 1;
    }

    setCookie('lastWinSubjections', today, 30);
    setCookie('winStreakSubjections', streak, 30);

    unfilledStreak.textContent = '';
    filledStreak.textContent = streak;

}

initWinstreak();

function saveGameStateSubjections() {
    const boardState = Array.from(document.querySelectorAll('.cell-button')).map(btn => {
        return {
            name: btn.textContent,
            class: btn.className,
            disabled: btn.disabled
        };
    });

    const state = {
        boardState,
        numCorrect,
        guesses,
        guessLog
    };

    setCookie('boardStateSubjections', JSON.stringify(state), 1);
    setCookie('lastGameDaySubjections', daysSinceEpoch, 1);
}

async function loadGameStateSubjections() {
    const savedDay = parseInt(getCookie('lastGameDaySubjections'), 10);
    if (savedDay !== daysSinceEpoch) return;

    const savedState = getCookie('boardStateSubjections');
    if (!savedState) return;

    const state = JSON.parse(savedState);

    window.selectedStudents = state.boardState.map(btn => ({ name: btn.name, cls: btn.class }));

    const buttons = document.querySelectorAll('.cell-button');
    toggledCount = 0;

    const buttonsToHide = (state.numCorrect || 0) * 4;

    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        const savedBtn = state.boardState[i];
        btn.textContent = savedBtn.name;
        btn.className = savedBtn.class;
        btn.disabled = savedBtn.disabled;
        btn.style.visibility = (i < buttonsToHide) ? 'hidden' : 'visible';
        if (btn.classList.contains('toggle')) toggledCount++;
    }

    numCorrect = state.numCorrect || 0;
    guesses = state.guesses || 0;
    guessLog = state.guessLog || [];

    const guessP = document.getElementById('guessP');
    const dotsSpan = guessP.querySelector('.dots');
    if (dotsSpan) {
        dotsSpan.textContent = '•'.repeat(guesses) + '·'.repeat(5 - guesses);
    }

    const selectedGroups = JSON.parse(getCookie('selectedGroupsSubjections'));

    function normalizeArray(arr) {
        return arr.map(s => s.trim().toLowerCase()).sort();
    }

    const groupsWithGuessIndex = guessLog
        .map((guess, idx) => {
            const normGuess = normalizeArray(guess);
            const matchedIndex = selectedGroups.findIndex(group => {
                const normGroup = normalizeArray(group.students.slice(0, 4));
                if (normGroup.length !== normGuess.length) return false;
                for (let i = 0; i < normGroup.length; i++) {
                    if (normGroup[i] !== normGuess[i]) return false;
                }
                return true;
            });
            return matchedIndex !== -1 ? { members: guess, indexInSelected: matchedIndex, guessIndex: idx } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.guessIndex - b.guessIndex);

    const tableCells = Array.from(document.querySelectorAll('td'));
    
    const allGroupsToShow = [...groupsWithGuessIndex];
    if (numCorrect === 4) {
        selectedGroups.forEach((group, idx) => {
            if (!groupsWithGuessIndex.some(g => g.indexInSelected === idx)) {
                allGroupsToShow.push({ members: group.students, indexInSelected: idx });
            }
        });
    }

    const totalOverlays = allGroupsToShow.length;

    const overlays = [1, 2, 3, 4].map(i => document.getElementById('CorrectOverlay' + i));

    allGroupsToShow.forEach((groupObj, guessIdx) => {
        const group = groupObj.members;
        const selectedGroup = selectedGroups[groupObj.indexInSelected];

        group.forEach((name, idx) => {
            const btn = Array.from(document.querySelectorAll('.cell-button')).find(b => b.textContent === name);
            if (btn && tableCells[guessIdx * 4 + idx]) tableCells[guessIdx * 4 + idx].appendChild(btn);
        });

        const overlay = overlays[guessIdx]; 

        if (overlay) {
            const h = overlay.querySelector('h');
            const p = overlay.querySelector('p');
            const cls = selectedGroup.class;
            const className = subjects[cls] || cls;
            if (h) h.textContent = `${className} - ${cls.replace(/-ext|-drama|-anc|-phys/g, '')}`;
            if (p) p.textContent = group.join(", ");
            overlay.classList.remove('hidden');
            overlay.classList.add('visible');

            overlay.style.top = (14.8 + (totalOverlays - 1 - guessIdx) * overlayShiftPercent) + '%';
        }
    });


    document.getElementById('submitButton').disabled = toggledCount !== 4;
    document.getElementById('deselectButton').disabled = toggledCount === 0;
    document.getElementById('shuffleButton').disabled = numCorrect === 4;
}


makeBoard();

setTimeout(() => {
    if (window.location.pathname.includes('/subjections/daily')) {
        loadGameStateSubjections();
    }
}, 1);