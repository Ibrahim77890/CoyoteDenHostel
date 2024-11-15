// Add event listeners for buttons
document.querySelector(".h_contact button:nth-child(1)").addEventListener("click", addService);
document.querySelector(".h_contact button:nth-child(2)").addEventListener("click", removeService);

function addService() {
    // Select the h_services section
    const servicesContainer = document.querySelector(".h_services");

    // Create a new service div dynamically
    const newService = document.createElement("div");
    newService.classList.add("service");

    // Add content to the new service
    newService.innerHTML = `
        <img src="loi.avif" alt="New Service">
        <div>
            <h2>Additional Service</h2>
            <p>This is a dynamically added service. Customize it as needed!</p>
            <button>Book Now</button>
        </div>
    `;

    // Append the new service to the container
    servicesContainer.appendChild(newService);
}

function removeService() {
    // Select the h_services section
    const servicesContainer = document.querySelector(".h_services");

    // Remove the last service if there are any
    const lastService = servicesContainer.querySelector(".service:last-child");
    if (lastService) {
        servicesContainer.removeChild(lastService);
    } else {
        alert("No more services to remove!");
    }
}
