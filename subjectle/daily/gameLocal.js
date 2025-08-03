function showGameOverPopup(guesee) {
  document.getElementById('gameOverMessage').innerText = `You lose. The correct student was: ${guesee}.`;
  document.getElementById('gameOverPopup').style.display = 'block';

  renderHistogram("gameOverHistogram");
}

function closeGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
  reset_game();
}

function showWinPopup(num_guesses) {
  const text = `You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`;
  document.getElementById('winMessage').innerText = text;
  document.getElementById('winPopup').style.display = 'block';

  renderHistogram("winHistogram");
}

function betterDisable() {
  document.querySelectorAll('a, #footerA').forEach(el => el.classList.add('disabled'));
}

function betterEnable() {
  document.querySelectorAll('a, #footerA').forEach(el => el.classList.remove('disabled'));
}

window.enterGuess = async function (name) {
    saveGuess(name);

    const id = "card" + (num_guesses + 1);
    const card = document.getElementById(id);
    const input_wrapper = card.querySelector('.input-wrapper');
    const input_element = input_wrapper.querySelector('input');
    const button_element = input_wrapper.querySelector('button');

    betterDisable();
  
    input_element.disabled = true;
    button_element.disabled = true;
    num_guesses += 1;
    gtag('event', 'guess_made', {
  'event_category': 'gameplay',
  'event_label': 'subjectle',
  'value': num_guesses,
  'guessed_name': name
});
    await flipCards(name, num_guesses);

    betterEnable();

    if (num_guesses === 1) {
    gtag('event', 'game_started', {
    'event_category': 'engagement',
    'event_label': 'subjectle'
  });
}
    if (name === guesee) {
      updateWinstreak();
      gtag('event', 'game_end', {
        'event_category': 'gameplay',
        'event_label': 'subjectle',
        'value': num_guesses,
        'win': true,
        'correct_name': guesee
      });
      updateHistogram(num_guesses);
      setCookie("lastWin", daysSinceEpoch, 30);
      showWinPopup(num_guesses);
      return;
    }
  
    if (num_guesses === 6) {
      gtag('event', 'game_end', {
        'event_category': 'gameplay',
        'event_label': 'subjectle',
        'value': num_guesses,
        'win': false,
        'correct_name': guesee
      });
      updateHistogram(0);
      showGameOverPopup(guesee);
      return;
    }
};
