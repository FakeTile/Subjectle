function reset_game() {
    num_guesses = 0;
      
    const today = getDaysSinceEpoch(new Date());
    const newSeed = Math.floor(Math.random() * 100000);
    const shuffled = seededShuffle(Object.keys(data), newSeed);
    guesee = shuffled[today % shuffled.length];
  
    // clear elements
    for (let i = 1; i <= 6; i++) {
      const card = document.getElementById('card' + i);
      const input = card.querySelector('.input-wrapper input');
      const button = card.querySelector('.input-wrapper button');
      const hints = card.querySelectorAll('.hint-wrapper .hint');
  
      input.value = '';
      input.disabled = i !== 1;  // disbale all but first
      button.disabled = i !== 1;
  
      hints.forEach(h => {
        h.textContent = '';
        h.style.backgroundColor = '#2C2C2C'; // for test purpose
        h.classList.remove('flip');
      });
    }
  }


function showGameOverPopup(guesee) {
  return new Promise(resolve => {
    document.getElementById('gameOverMessage').innerText = `You lose. The correct student was: ${guesee}.`;
    document.getElementById('gameOverPopup').style.display = 'block';

    const btn = document.getElementById('gameOverClose');
    const handler = () => {
      document.getElementById('gameOverPopup').style.display = 'none';
      btn.removeEventListener('click', handler);
      resolve();
    };
    btn.addEventListener('click', handler);
  });
}

function closeGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
}

function shutGameOverPopup() {
  document.getElementById('gameOverPopup').style.display = 'none';
}

function showWinPopup(num_guesses) {
  return new Promise(resolve => {
    const text = `You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`;
    document.getElementById('winMessage').innerText = text;
    document.getElementById('winPopup').style.display = 'block';

    const btn = document.getElementById('winClose');
    const handler = () => {
      document.getElementById('winPopup').style.display = 'none';
      btn.removeEventListener('click', handler);
      resolve(); 
    };
    btn.addEventListener('click', handler);
  });
}

function closeWinPopup() {
  document.getElementById('winPopup').style.display = 'none';
}

function shutWinPopup() {
  document.getElementById('winPopup').style.display = 'none';
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
    const id = "card" + (num_guesses + 1);
    const card = document.getElementById(id);
    const input_wrapper = card.querySelector('.input-wrapper');
    const input_element = input_wrapper.querySelector('input');
    const button_element = input_wrapper.querySelector('button');

    const dailyModeButton = document.getElementById("dailyA");
    const resetButton = document.getElementById("resetA");
    const welcomeButton = document.getElementById("welcomeA")

    disableLink(dailyModeButton);
    disableLink(resetButton);
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

    enableLink(dailyModeButton, "../daily/");
    enableLink(resetButton, "javascript:void(0);", reset_game);
    enableLink(welcomeButton, "javascript:void(0);", showWelcome);

    if (num_guesses === 1) {
      gtag('event', 'game_started', {
        'event_category': 'engagement',
        'event_label': 'subjectle'
      });
}
  
    if (name === guesee) {
      gtag('event', 'game_end', {
        'event_category': 'gameplay',
        'event_label': 'subjectle',
        'value': num_guesses,
        'win': true,
        'correct_name': guesee
      });
      updateHistogram(num_guesses);
      await showWinPopup(num_guesses);
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
      updateHistogram(0);
      await showGameOverPopup(guesee);
      reset_game();
      return;
    }
};

let num_guesses = 0;
const input = document.querySelector('#card1 .input-wrapper input');
const button = document.querySelector('#card1 .input-wrapper button');
if (input && button) {
    input.disabled = false;
    button.disabled = false;
}

reset_game();
