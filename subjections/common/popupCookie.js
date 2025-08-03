function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
  setCookie('popupDismissedSubjections', 'true', 30);
}

if (!getCookie('popupDismissedSubjections')) {
  document.getElementById('welcomePopup').style.display = 'block';
};