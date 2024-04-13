const form = document.querySelector('registrationForm'); 
form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    const error = document.getElementById('errorMessages');
    if (!emailIsValid(email)) { 
        error = 'Please enter a valid email address.'; 
        return;
    } if (password.length < 8) { 
        error = 'Password must be at least 8 characters long.'; 
        return;
    } if (username == '') {
        error = 'Pleas enter a username';
        return;
    } if (username.includes('/^[a-zа-яії0-9_-]{8, 16}$/')) {
        return
    }

    form.submit(); 
    if (error !== '') {
        document.getElementById('errorMessages').innerText = error;
        return false;
    }
    
    function emailIsValid(email) { 
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    }
    document.getElementById('errorMessages').innerText = '';
    form.innerText = '';
});

