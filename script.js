document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userType = document.getElementById('userType').value;
        const userId = document.getElementById('userId').value;

        // You can add other user information fields here

        // Send data to the server (backend)
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_type: userType, user_info: { user_id: userId } }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
