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
    gtag('event', 'guess_made', {
  'event_category': 'gameplay',
  'event_label': 'subjectle',
  'value': num_guesses,
  'guessed_name': name
});
    await flipCards(name, num_guesses);
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
      showWinPopup(num_guesses);
      reset_game();
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
      showGameOverPopup(guesee);
      reset_game();
      return;
    }
};
