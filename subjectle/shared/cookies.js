function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
  setCookie('popupDismissed', 'true', 30);
}

if (!getCookie('popupDismissed')) {
  document.getElementById('welcomePopup').style.display = 'block';
};

function getHistogram(cookie = "histogram") {
  h = getCookie(cookie);

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