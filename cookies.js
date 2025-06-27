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

function daysBetween(d1, d2) {
    if (d1 == null || d2 == null) {
        return false;
    }
    const start = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    const end = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());

    return Math.floor(Math.abs(end - start) / (1000 * 60 * 60 * 24));
}

function isStreak(today, prev) {
    /* 
    Returns true if the 2 days meet streak requirements
    */
    const between = daysBetween(today, prev);
        
    // if there has been 1 day between today and last win, 
    // or three days but its a monday 
    return (between === 1 || (between < 4 && today.getDay() === 1));
}

function initCookies() {
    const lastWinDate = new Date(getCookie("lastWin"));
    const today = new Date();
    if (isStreak(today, lastWinDate)) {
        unfilledStreak.textContent = getCookie("winStreak");
    } else if (daysBetween(today, lastWinDate) === 0) {
        filledStreak.textContent = getCookie("winStreak");
        hasDoneDaily = true;
    } else {
        unfilledStreak.textContent = 0;
    }
}

const filledStreak = document.querySelector('.streak-filled');
const unfilledStreak = document.querySelector('.streak-unfilled');
let hasDoneDaily = false;

initCookies();

function updateWinstreak() {
    if (hasDoneDaily) {
        return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastWinStr = getCookie("lastWin");
    const winStreakStr = getCookie("winStreak");

    let streak = parseInt(winStreakStr || '0', 10);

    if (lastWinStr) {
        const lastWinDate = new Date(lastWinStr);
        lastWinDate.setHours(0, 0, 0, 0);

        if (isStreak(today, lastWinDate)) {
            streak += 1;
        } else {
            streak = 1;
        }

    } else {
        streak = 1;
    }

    setCookie('lastWin', today.toISOString(), 30);
    setCookie('winStreak', streak, 30);

    unfilledStreak.textContent = '';
    filledStreak.textContent = streak;

}