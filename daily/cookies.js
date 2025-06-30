async function loadSavedGuesses() {
    const c = getCookie("savedGuess");
    const d = getCookie("lastGuess");
    num_guesses = 0;
    if (d == daysSinceEpoch) {
        const guesses = c.split("_");
        if (guesses) num_guesses = guesses.length;

        const promises = [];
        for (let i = 0; i < num_guesses; i++) {
            const guess = guesses[i];
            promises.push(flipCards(guess, i + 1));
    
            const input = document.querySelector(`#card${i+1} .input-wrapper input`);
            input.value = guess;
        }

        await Promise.all(promises);

        for (i = 0; i < num_guesses; i++) {
            const input = document.querySelector(`#card${i+1} .input-wrapper input`);
            const button = document.querySelector(`#card${i+1} .input-wrapper button`);
            input.disabled = true;
            button.disabled = true;
        }
    }
}

function saveGuess(guess) {
    const c = getCookie("savedGuess");
    const d = getCookie("lastGuess");

    if (d == daysSinceEpoch) {
        setCookie("savedGuess", (c + "_" + guess), 1);
    } else {
        setCookie("savedGuess", guess, 1);
        setCookie("lastGuess", daysSinceEpoch, 1);
    }
}

loadSavedGuesses();

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
    const lastWinDate = getCookie("lastWin");
    const today = getDaysSinceEpoch(new Date());;
    if (isStreak(today, lastWinDate)) {
        unfilledStreak.textContent = getCookie("winStreak");
    } else if (today - lastWinDate === 0) {
        filledStreak.textContent = getCookie("winStreak");
    } else {
        unfilledStreak.textContent = 0;
    }
}

const filledStreak = document.querySelector('.streak-filled');
const unfilledStreak = document.querySelector('.streak-unfilled');

function updateWinstreak() {
    const today = getDaysSinceEpoch(new Date());

    const lastWin = getCookie("lastWin");
    const winStreakStr = getCookie("winStreak");

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

    setCookie('lastWin', today, 30);
    setCookie('winStreak', streak, 30);

    unfilledStreak.textContent = '';
    filledStreak.textContent = streak;

}

initWinstreak();