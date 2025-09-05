document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('messageBox');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        if (!nameInput.value || !emailInput.value || !document.querySelector('input[name="interests"]:checked')) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Gather form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission
        console.log('Form Submitted!', data);

        showMessage('Thank you for registering!', 'success');

        // Clear form after delay
        setTimeout(() => {
            form.reset();
            hideMessage();
        }, 3000);
    });

    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.classList.remove('hidden', 'success', 'error');
        messageBox.classList.add(type);
    }

    function hideMessage() {
        messageBox.classList.add('hidden');
    }
});
