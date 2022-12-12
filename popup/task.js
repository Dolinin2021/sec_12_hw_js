const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close_times');

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'close' + '=' + encodeURIComponent('true');
});

window.onload = function() {
    if (!document.cookie.includes('close=true')) {
        modal.classList.add('modal_active');
    }
}
