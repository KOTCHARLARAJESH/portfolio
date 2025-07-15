document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission (no backend)
    document.getElementById('form-response').textContent = "Thank you for contacting me! I'll get back to you soon.";
    // Optionally clear form fields
    this.reset();
});