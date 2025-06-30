function showGameOverPopup(guesee) {
  document.getElementById('gameOverMessage').innerText = `You lose. The correct student was: ${guesee}.`;
  document.getElementById('gameOverPopup').style.display = 'block';
}

function closeGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
}

function showWinPopup(num_guesses) {
  const text = `You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`;
  document.getElementById('winMessage').innerText = text;
  document.getElementById('winPopup').style.display = 'block';
}

function closeWinPopup() {
  document.getElementById('winPopup').style.display = 'none';
}

window.enterGuess = async function (name) {
    saveGuess(name);

    const id = "card" + (num_guesses + 1);
    const card = document.getElementById(id);
    const input_wrapper = card.querySelector('.input-wrapper');
    const input_element = input_wrapper.querySelector('input');
    const button_element = input_wrapper.querySelector('button');
  
    input_element.disabled = true;
    button_element.disabled = true;
    num_guesses += 1;
  
    await flipCards(name, num_guesses);
  
    if (name === guesee) {
      updateWinstreak();
      showWinPopup(num_guesses);
      reset_game();
      return;
    }
  
    if (num_guesses === 6) {
      showGameOverPopup(guesee);
      reset_game();
      return;
    }
};
