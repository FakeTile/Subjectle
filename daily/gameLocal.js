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
  
    console.log(name);
    if (name === guesee) {
      updateWinstreak();
      alert(`You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`);
      reset_game();
      return;
    }
  
    if (num_guesses === 6) {
      alert(`You lose. The correct student was: ${guesee}.`);
      reset_game();
      return;
    }
};