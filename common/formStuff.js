if (!getCookie('formSubmitted')) {
  document.getElementById('formPopup').style.display = 'block';
}

document.getElementById('formCloseBtn').addEventListener('click', () => {
    setCookie('formSubmitted', 'true', 30);
    document.getElementById('formPopup').style.display = 'none';
});
