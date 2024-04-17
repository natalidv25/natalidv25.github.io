

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#registrationForm');
    const errorDiv = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        let errorMessage = '';
        // Перевірка імені користувача
        if (username === '') {
            errorMessage += 'Please enter a username.\n';
        }
        // Перевірка електронної адреси
        if (!emailIsValid(email)) {
            errorMessage += 'Please enter a valid email address.\n';
        }
        // Перевірка пароля
        if (password.length < 8) {
            errorMessage += 'Password must be at least 8 characters long.\n';
        }
        if (!passwordIsValid(password)) {
            errorMessage += 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.\n';
        }
        if (errorMessage.length > 0) {
            errorDiv.innerText = errorMessage;
            return;
        }
        form.reset(); // Скидання форми після успішної реєстрації
        errorDiv.innerText = 'Registration successful!';
    });
    
    function emailIsValid(email) { 
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    }
    
    function passwordIsValid(password) {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const numberPattern = /[0-9]/;
        const specialCharPattern = /[\^$*.[]{}()?""!@#%&><':;|_~``,<]/;
        return uppercasePattern.test(password) &&
               lowercasePattern.test(password) &&
               numberPattern.test(password) &&
               specialCharPattern.test(password);
    };
});