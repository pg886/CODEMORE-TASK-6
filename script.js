document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collecting the input values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Simple validation (this can be expanded as needed)
    if (title === '' || content === '') {
        alert('All fields are required!');
        return;
    }

    // Display the confirmation message
    alert(`Your post titled "${title}" has been submitted.`);

    // Optionally, reset the form
    document.getElementById('postForm').reset();
});
