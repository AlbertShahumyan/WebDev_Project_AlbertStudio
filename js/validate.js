// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() {

  // Get the form element
  const form = document.getElementById('contactForm');

  // Run validation when the form is submitted
  form.addEventListener('submit', function(event) {
    // Stop the form from submitting until we validate it
    event.preventDefault();

    // Clear all previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('methodError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get the values the user typed in
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const method = document.getElementById('contactMethod').value;
    const message = document.getElementById('message').value.trim();

    // Track if the form is valid
    let isValid = true;

    // Validate Full Name
    if (name === '') {
      document.getElementById('nameError').textContent = 'Please enter your full name.';
      isValid = false;
    }

    // Validate Email
    if (email === '') {
      document.getElementById('emailError').textContent = 'Please enter your email address.';
      isValid = false;
    } else if (!email.includes('@')) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Contact Method
    if (method === '') {
      document.getElementById('methodError').textContent = 'Please select a preferred contact method.';
      isValid = false;
    }

    // Validate Message
    if (message === '') {
      document.getElementById('messageError').textContent = 'Please enter a message.';
      isValid = false;
    }

    // If everything is valid, show a success message
    if (isValid) {
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    }
  });
});