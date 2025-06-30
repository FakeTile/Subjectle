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
  document.getElementById('popupContent').style.display = 'none';
  document.getElementById('popupOverlay').style.display = 'none';
  setCookie('popupDismissed', 'true', 30);
}

document.addEventListener('DOMContentLoaded', () => {
  if (!getCookie('popupDismissed')) {
    document.getElementById('popupContent').style.display = 'block';
    document.getElementById('popupOverlay').style.display = 'block';
  }
});

function isStreak(today, prev) {
    /* 
    Returns true if the 2 days meet streak requirements
    */
    const between = today - prev;
        
    // if there has been 1 day between today and last win, 
    // or three days but its a monday 
    return (between === 1 || (between < 4 && (today % 7 == 1)));
}

function initCookies() {
    const lastWinDate = getCookie("lastWin");
    const today = getDaysSinceEpoch(new Date());;
    if (isStreak(today, lastWinDate)) {
        unfilledStreak.textContent = getCookie("winStreak");
    } else if (today - lastWinDate === 0) {
        filledStreak.textContent = getCookie("winStreak");
    } else {
        unfilledStreak.textContent = 0;
    }
}

const filledStreak = document.querySelector('.streak-filled');
const unfilledStreak = document.querySelector('.streak-unfilled');

initCookies();

function updateWinstreak() {
    const today = getDaysSinceEpoch(new Date());

    const lastWin = getCookie("lastWin");
    const winStreakStr = getCookie("winStreak");

    let streak = parseInt(winStreakStr || '0', 10);

    if (lastWin) {
        if (isStreak(today, lastWin)) {
            streak += 1;
        } else {
            streak = 1;
        }

    } else {
        streak = 1;
    }

    setCookie('lastWin', today, 30);
    setCookie('winStreak', streak, 30);

    unfilledStreak.textContent = '';
    filledStreak.textContent = streak;

}