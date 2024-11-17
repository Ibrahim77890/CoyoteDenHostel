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

/**
 * Updates the image carousel to display the image at the current index.
 * Calculates the offset based on the current index and gallery width, 
 * and applies a CSS transformation to shift the view.
 */
const updateCarousel = () => {
    const width = gallery.clientWidth; // Get the gallery width for dynamic resizing
    gallery.style.transform = `translateX(-${index * width}px)`; // Shift the carousel
};

/**
 * Handles the "Next" button click event.
 * Moves to the next image in the carousel and loops back to the start when at the end.
 * Updates the carousel view accordingly.
 */
nextBtn.addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".imgi").length; // Total images in the carousel
    index = (index + 1) % totalImages; // Increment index with looping
    updateCarousel();
});

/**
 * Handles the "Previous" button click event.
 * Moves to the previous image in the carousel and loops to the last image when at the start.
 * Updates the carousel view accordingly.
 */
prevBtn.addEventListener("click", () => {
    const totalImages = document.querySelectorAll(".imgi").length; // Total images in the carousel
    index = (index - 1 + totalImages) % totalImages; // Decrement index with looping
    updateCarousel();
});

/**
 * Recalculates the carousel layout on window resize for responsiveness.
 * Ensures the current image stays centered after resizing.
 */
window.addEventListener("resize", updateCarousel);

const detailsDivInitial = document.querySelector(".details");

detailsDivInitial.classList.add("hidden");

/**
 * Toggles the display of room details in the `.details` section.
 * - Updates the button text between "Show Details" and "Hide Details."
 * - Populates or clears the `.details` section with the room's information and associated image.
 * 
 * @param {HTMLElement} button - The button triggering the toggle.
 * @param {string} roomName - Name of the room to display details for.
 * @param {string} type - Type of the room.
 * @param {string} amenities - Amenities provided in the room.
 * @param {string} price - Price of the room.
 */
function toggleDetails(button, roomName, type, amenities, price) {
    const detailsDiv = document.querySelector(".details"); // Select the details section
    detailsDiv.classList.remove("hidden"); // Ensure details are visible

    if (button.textContent === "Show Details") {
        // Reset all buttons to "Show Details"
        const buttonsDetails = document.querySelectorAll(".details-button");
        buttonsDetails.forEach((buttonElement) => {
            buttonElement.textContent = "Show Details";
        });
        button.textContent = "Hide Details"; // Update clicked button's text

        // Map room names to their respective images
        const roomImages = {
            "Babusar Room": "room1.jpg",
            "Nagarparkar Room": "room2.jpg",
            "Lakki Marwat Room": "room3.jpg",
            "Swat Room": "room4.jpg",
            "Kalash Dorm": "room5.jpg",
            "Quetta Dorm": "room5.jpg",
        };
        const roomImage = roomImages[roomName]; // Get the image for the selected room

        // Populate details section with room information
        detailsDiv.innerHTML = `
            <h2>Room Details</h2>
            <img src="${roomImage}" alt="${roomName}" style="width:100%; max-width:300px; margin-bottom:10px;">
            <p><strong>Room Name:</strong> ${roomName}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Amenities:</strong> ${amenities}</p>
            <p><strong>Price:</strong> ${price}</p>
        `;
    } else {
        // Clear details section and reset button text
        button.textContent = "Show Details";
        detailsDiv.classList.add("hidden");
        detailsDiv.innerHTML = ""; // Clear content
    }
}

/**
 * Changes the background color of all sections and articles on the page.
 * Adjusts text color for contrast to maintain readability.
 * 
 * @param {HTMLElement} button - The button triggering the background change.
 */
function changeBackground(button) {
    // Generate a random background color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Apply the background color to all sections and articles
    const divs = document.querySelectorAll("section, article");
    divs.forEach(div => {
        div.style.backgroundColor = randomColor;
    });

    // Calculate a contrasting color for text
    const contrastingColor = getContrastingColor(randomColor);

    // Apply the contrasting color to all text elements (p, h1, h2)
    const allTextElements = document.querySelectorAll("p,h1,h2");
    allTextElements.forEach(element => {
        element.style.color = contrastingColor;
    });
}

/**
 * Utility function to calculate a contrasting color.
 * Ensures text is readable against a given background color by choosing either black or white.
 * 
 * @param {string} hexColor - The background color in hex format.
 * @returns {string} - A contrasting color ("#000000" or "#FFFFFF").
 */
function getContrastingColor(hexColor) {
    // Convert hex color to RGB
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    // Calculate the luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors and white for dark colors
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
}


/**
 * Increases the font size of all elements on the page by 1 pixel.
 * 
 * This function selects all elements on the page, retrieves their current font size,
 * and increments it by 1 pixel to make the text larger.
 */

function increaseFontSize() {
    // Select all elements on the page
    const allElements = document.querySelectorAll("*");

    // Loop through each element
    allElements.forEach(element => {
        // Get the computed style of the current element
        const style = window.getComputedStyle(element);
        const fontSize = style.fontSize;

        // Check if the element has a font size and is not zero
        if (fontSize) {
            // Convert the font size to a number and increase it
            const currentSize = parseFloat(fontSize);
            element.style.fontSize = `${currentSize + 1}px`; // Increase font size by 2px
        }
    });
}

function decreaseFontSize() {
    // Select all elements on the page
    const allElements = document.querySelectorAll("*");

    // Loop through each element
    allElements.forEach(element => {
        // Get the computed style of the current element
        const style = window.getComputedStyle(element);
        const fontSize = style.fontSize;

        // Check if the element has a font size and is not zero
        if (fontSize) {
            // Convert the font size to a number and decrease it
            const currentSize = parseFloat(fontSize);
            element.style.fontSize = `${currentSize - 1}px`; // decrease font size by 2px
        }
    });
}


/**
 * Toggles dark mode on and off based on the state of a checkbox.
 * 
 * When dark mode is enabled, it inverts the background colors of all elements
 * to create a dark theme. When dark mode is disabled, it resets the colors to their
 * original state.
 * 
 * @param {HTMLInputElement} checkbox - The checkbox element that triggers the dark mode toggle.
 */

function toggleDarkMode(checkbox) {
    const allElements = document.querySelectorAll("*");

    if (checkbox.checked) {
        // Turn on dark mode
        allElements.forEach(element => {
            const style = window.getComputedStyle(element);
            const backgroundColor = style.backgroundColor;

            if (backgroundColor && backgroundColor.startsWith("rgb")) {
                const rgb = backgroundColor.match(/\d+/g).map(Number);
                const brightness = Math.sqrt(
                    0.299 * rgb[0] ** 2 + 0.587 * rgb[1] ** 2 + 0.114 * rgb[2] ** 2
                );

                if (brightness > 200) {
                    const invertedColor = `rgb(${255 - rgb[0]}, ${255 - rgb[1]}, ${255 - rgb[2]})`;
                    element.style.backgroundColor = invertedColor;
                    element.style.color = backgroundColor;
                }
            }
        });
    } else {
        // Turn off dark mode (reset to original colors)
        allElements.forEach(element => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }
}
