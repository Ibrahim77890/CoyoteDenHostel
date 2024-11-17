// Add event listeners for buttons
// The first button adds a new service dynamically when clicked.
document.querySelector(".h_contact button:nth-child(1)").addEventListener("click", addService);

// The second button removes the last added service when clicked.
document.querySelector(".h_contact button:nth-child(2)").addEventListener("click", removeService);

/**
 * Dynamically adds a new service section to the services container.
 */
function addService() {
    // Select the container for services
    const servicesContainer = document.querySelector(".h_services");

    // Create a new service div element
    const newService = document.createElement("div");
    newService.classList.add("service"); // Add the 'service' class for consistent styling

    // Define the content of the new service (image, description, and button)
    newService.innerHTML = `
        <img src="loi.avif" alt="New Service"> <!-- Placeholder image -->
        <div>
            <h2>Additional Service</h2> <!-- Example title for the new service -->
            <p>This is a dynamically added service. Customize it as needed!</p> <!-- Service description -->
            <button>Book Now</button> <!-- Button for booking the new service -->
        </div>
    `;

    // Append the new service to the services container
    servicesContainer.appendChild(newService);
}

/**
 * Removes the last service from the services container.
 * If no services are available, an alert is shown to the user.
 */
function removeService() {
    // Select the container for services
    const servicesContainer = document.querySelector(".h_services");

    // Find the last added service in the container
    const lastService = servicesContainer.querySelector(".service:last-child");

    // Remove the last service if it exists, or alert the user if none remain
    if (lastService) {
        servicesContainer.removeChild(lastService); // Remove the last service
    } else {
        alert("No more services to remove!"); // Notify the user if there are no services left
    }
}
