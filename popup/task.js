const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close_times');

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'close' + '=' + encodeURIComponent('true');
});

window.onload = function() {
    if (document.cookie == 'close=true') {
        console.log(document.cookie);
    } else {
        modal.classList.add('modal_active');
    }
}
