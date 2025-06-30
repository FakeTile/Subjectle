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

function closePopup() {
  document.getElementById('popupContent').style.display = 'none';
  document.getElementById('popupOverlay').style.display = 'none';
  setCookie('popupDismissed', 'true', 30);
}

if (!getCookie('popupDismissed')) {
  document.getElementById('popupContent').style.display = 'block';
  document.getElementById('popupOverlay').style.display = 'block';
};

loadSavedGuesses();
