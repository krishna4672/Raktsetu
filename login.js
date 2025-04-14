document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login process (Replace with actual authentication logic)
    if(email === "user@example.com" && password === "password") {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});
