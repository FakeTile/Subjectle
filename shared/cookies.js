function setCookie(name, value, lifespanDays) {
    const expires = new Date(Date.now() + lifespanDays * 864e5).toUTCString();
    document.cookie = (
        name + '=' + encodeURIComponent(value) + 
        '; expires=' + expires + 
        '; path=/'
    );
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, null);
}

function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
  setCookie('popupDismissed', 'true', 30);
}

if (!getCookie('popupDismissed')) {
  document.getElementById('welcomePopup').style.display = 'block';
};

function getHistogram() {
  h = getCookie("histogram");

  if (h) {
    return h.split(' ').map(Number);
  } else {
    return [0,0,0,0,0,0,0];
  }
}

function updateHistogram(numGuesses) {
  h = getHistogram();
  h[numGuesses] += 1;
  setCookie("histogram", h.join(' '), 30);
}

function removeFailedHistogram() {
  h = getHistogram();
  h[0] -= 1;
  setCookie("histogram", h.join(' '), 30);
}