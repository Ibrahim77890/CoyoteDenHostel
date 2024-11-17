// This code is for the contact form validation in the contact.html page and validates the input fields
// before submission.


// Select input fields and button by their respective IDs or class
const usernameInput = document.querySelector('#name_data'); // Input for username
const phoneInput = document.querySelector('#phone_data'); // Input for phone number
const emailInput = document.querySelector('#email_data'); // Input for email
const messageInput = document.querySelector('#message_data'); // Input for message

// Select the button using its class
const button = document.querySelector('.btn-contact');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', () => {
    // Retrieve and trim the values of the input fields to remove extra spaces
    const username = usernameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Initialize validation flags and error message container
    let isValid = true; // Tracks if all inputs pass validation
    let errorMessage = ""; // Accumulates error messages

    // Check if all fields are filled
    if (username === "" || email === "" || phone === "" || message === "") {
        isValid = false; // Validation fails if any field is empty
        errorMessage += "All the fields must be filled\n"; // Error message for missing fields
        alert(errorMessage); // Show error message
        return; // Exit the function since validation failed
    }

    // Check if the phone number contains only digits
    const phoneRegex = /^[0-9]+$/; // Regular expression for digits only
    if (!phoneRegex.test(phone)) {
        isValid = false; // Validation fails if phone contains non-digit characters
        errorMessage += "Phone number must contain only digits.\n"; // Add specific error message
    }

    // Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
    if (!emailRegex.test(email)) {
        isValid = false; // Validation fails if email does not match the format
        errorMessage += "Email must be in the format example@domain.com.\n"; // Add specific error message
    }

    // No need to check message again here since it's already checked above for emptiness

    // Display the result of validation
    if (isValid) {
        // If all inputs are valid, show success message
        alert("All inputs are valid!");
        // Proceed with further logic such as form submission or data processing
    } else {
        // If validation fails, show accumulated error messages
        alert(errorMessage);
    }
});
