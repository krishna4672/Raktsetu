document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission here
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('Form Data Submitted:', data);
    // Add your form submission logic here, like sending data to a server
});
