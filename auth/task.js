const form = document.querySelector('#signin__form');
const signIn = document.querySelector('#signin');
const welcome = document.querySelector('.welcome');
const id = document.querySelector('#user_id');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.responseType = 'json';
    xhr.send(formData);
    
    xhr.onload = function() {
        localStorage.setItem('success', xhr.response['success']);
        localStorage.setItem('user_id', xhr.response['user_id']);

        if (localStorage.getItem('success') === 'true') {
            signIn.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            id.textContent = localStorage.getItem('user_id');
        } else {
            alert('Неверный логин/пароль');
        }
    }
    form.reset();
});

if (localStorage.getItem('user_id') !== 'undefined') {
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    id.textContent = localStorage.getItem('user_id');
}
