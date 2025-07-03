document.querySelectorAll('.popupOverlay').forEach(overlay => {
  overlay.addEventListener('click', function(event) {
    if (!event.target.closest('.popupContent')) {
      if (overlay.id === 'welcomePopup') {
        closePopup();
      } else {
        overlay.style.display = 'none';
      }
    }
  });
});