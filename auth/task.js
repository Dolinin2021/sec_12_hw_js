const form = document.querySelector('#signin__form');
const signIn = document.querySelector('#signin');
const welcome = document.querySelector('.welcome');
const id = document.querySelector('#user_id');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    
    xhr.onload = function() {
        if (xhr.readyState === xhr.DONE) {

            let dictionary = JSON.parse(xhr.response);
            localStorage.setItem('success', dictionary['success']);
            localStorage.setItem('user_id', dictionary['user_id']);

            if (localStorage.getItem('success') === 'true') {
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                id.textContent = localStorage.getItem('user_id');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
});

if (localStorage.getItem('user_id')) {
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    id.textContent = localStorage.getItem('user_id');
}
