function showGameOverPopup(guesee) {
  document.getElementById('gameOverMessage').innerText = `You lose. The correct student was: ${guesee}.`;
  document.getElementById('gameOverPopup').style.display = 'block';

  renderHistogram("gameOverHistogram");
}

function closeGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
}

function showWinPopup(num_guesses) {
  const text = `You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`;
  document.getElementById('winMessage').innerText = text;
  document.getElementById('winPopup').style.display = 'block';

  renderHistogram("winHistogram");
}

function disableLink(link) {
  link.style.pointerEvents = "none";
  link.style.opacity = "0.5";
  link.style.cursor = "default";
  link.onclick = e => e.preventDefault();
  link.removeAttribute("href");
}

function enableLink(link, href, onclickHandler = null) {
  link.style.pointerEvents = "auto";
  link.style.opacity = "1";
  link.style.cursor = "pointer";
  link.setAttribute("href", href);
  link.onclick = onclickHandler;
}

window.enterGuess = async function (name) {
    saveGuess(name);

    const id = "card" + (num_guesses + 1);
    const card = document.getElementById(id);
    const input_wrapper = card.querySelector('.input-wrapper');
    const input_element = input_wrapper.querySelector('input');
    const button_element = input_wrapper.querySelector('button');

    const infiniteModeButton = document.getElementById("infiniteA");
    const welcomeButton = document.getElementById("welcomeA")

    disableLink(infiniteModeButton);
    disableLink(welcomeButton);
  
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

    enableLink(infiniteModeButton, "../infinite/");
    enableLink(welcomeButton, "javascript:void(0);", showWelcome);

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
