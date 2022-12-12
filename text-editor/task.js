let textarea = document.querySelector('#editor');

textarea.addEventListener('keyup', () => {
    localStorage.setItem('value', textarea.value);
});

function reload () {
    textarea.value = localStorage.getItem('value');
}

window.onload = function() {
    if (sessionStorage.getItem("is_reloaded")) {
        reload();
    }
}
