const form = document.querySelector('form');
const warning_name = document.getElementById('warning-name');
const warning_email = document.getElementById('warning-email');
const warning_password = document.getElementById('warning-password');
const password = document.getElementById('password');
const name = document.getElementById('name');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
    const formData = new FormData(form);
    event.preventDefault();
    if (warning_name.length === 0   ) {
        warning_name.style.display = 'inline';
        warning_name.style.color = 'red';
    }
    else if (warning_email.length === 0 ) {
        warning_email.style.display = 'inline';
        warning_email.style.color = 'red';
    }
    else if (warning_password.length === 0 ) {
        warning_password.style.display = 'inline';
        warning_password.style.color = 'red';
    }
    else {
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }

});