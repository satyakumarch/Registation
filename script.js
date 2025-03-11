document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Form submitted successfully!");
    // Here you can add your form submission logic (e.g., AJAX call)
    location.reload(); // Refresh the form page
};

document.querySelector('input[type="reset"]').onclick = function(event) {
    const confirmation = confirm("Are you sure you want to reset the form?");
    if (!confirmation) {
        event.preventDefault(); // Prevent the form from resetting if user cancels
    }
};