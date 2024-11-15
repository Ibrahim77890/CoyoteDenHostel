/**
 * Script for managing an image carousel and displaying room details dynamically.
 *
 * Features:
 * - Carousel functionality:
 *   - Displays one image at a time with navigation buttons for "Previous" and "Next."
 *   - Supports infinite looping of images.
 *   - Adjusts carousel layout on window resize for responsiveness.
 *
 * - Room details toggle functionality:
 *   - Displays specific room details (name, type, amenities, price) and an associated image.
 *   - Allows toggling between "Show Details" and "Hide Details."
 *   - Dynamically updates content in the details section when toggled.
 *
 * Components:
 * - Image gallery (`.imgi_gallery`) for carousel.
 * - Navigation buttons (`.prev-btn` and `.next-btn`) for carousel navigation.
 * - Details section (`.details`) for displaying room-specific information.
 *
 * Behavior:
 * - Clicking "Next" or "Previous" buttons navigates through the images.
 * - Clicking "Show Details" on a room displays its details in the `.details` section.
 * - Clicking "Hide Details" clears the `.details` section.
 */


const gallery = document.querySelector(".imgi_gallery");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;

const updateCarousel = () => {
    const width = gallery.clientWidth;
    gallery.style.transform = `translateX(-${index * width}px)`;
};

nextBtn.addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".imgi").length;
    index = (index + 1) % totalImages; // Loop back to the first image
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".imgi").length;
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

window.addEventListener("resize", updateCarousel);

const detailsDivInitial = document.querySelector(".details");

detailsDivInitial.classList.add("hidden");

function toggleDetails(button, roomName, type, amenities, price) {
    // Select the details div
    const detailsDiv = document.querySelector(".details");
    detailsDiv.classList.remove("hidden");

    // Check if details are currently visible
    if (button.textContent === "Show Details") {
        // Update button text to "Hide Details"
        const buttonsDetails = document.querySelectorAll(".details-button");
        buttonsDetails.forEach((buttonElement) => {
            buttonElement.textContent = "Show Details";
        });
        button.textContent = "Hide Details";

        // Populate the details div with room details
        const roomImages = {
            "Babusar Room": "room1.jpg",
            "Nagarparkar Room": "room2.jpg",
            "Lakki Marwat Room": "room3.jpg",
            "Swat Room": "room4.jpg",
            "Kalash Dorm": "room5.jpg",
            "Quetta Dorm": "room5.jpg",
        };
        const roomImage = roomImages[roomName];
        detailsDiv.classList.remove("hidden");

        detailsDiv.innerHTML = `
            <h2>Room Details</h2>
            <img src="${roomImage}" alt="${roomName}" style="width:100%; max-width:300px; margin-bottom:10px;">
            <p><strong>Room Name:</strong> ${roomName}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Amenities:</strong> ${amenities}</p>
            <p><strong>Price:</strong> ${price}</p>
        `;
    } else {
        button.textContent = "Show Details";
        detailsDiv.classList.add("hidden");
        detailsDiv.innerHTML = "";
    }
}
