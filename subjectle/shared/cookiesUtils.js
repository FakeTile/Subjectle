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
