let textarea = document.querySelector('#editor');

textarea.addEventListener('keyup', () => {
    localStorage.setItem('value', textarea.value);
});

function reload () {
    let value = localStorage.getItem('value');
    textarea.value = value;
}

window.onload = function() {
    if (sessionStorage.getItem("is_reloaded")) {
        reload();
    }
}
