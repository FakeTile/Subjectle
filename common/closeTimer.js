const seconds = 5;

const formButton = document.querySelector('#formCloseBtn');
const timerSpan = formButton.querySelector("#timer");

for (let i = 0; i <= seconds; i++) {
  setTimeout(() => {
    timerSpan.textContent = `(${seconds - i})`;

    if (i === seconds) {
      formButton.disabled = false;
      timerSpan.textContent = ``;
      return;
    }
  }, i * 1000);
}
