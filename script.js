const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        if (validateEmail(email)) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            successMessage.innerText = 'Thank you for contacting us!';
        } else {
            alert('Invalid email format');
        }
    } else {
        alert('Please fill in all fields');
    }
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}