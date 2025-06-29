function loadComponent(id, path) {
    fetch(path)
    .then(res => res.text())
    .then(html => {
        document.getElementById(id).innerHTML = html;
    });
}

loadComponent("common", "/shared/common.html");