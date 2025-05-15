/* Event Handling: Change Text */
function changeText() {
    const title = document.getElementById("main-title");
    const text = document.getElementById("main-text");
    title.textContent = "Text Updated!";
    text.textContent = "You just changed the text with a button click!";
}

/* Event Handling: Change Color */
function changeColor() {
    const section = document.querySelector(".interactive");
    section.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/* Event Handling: Keypress Detection */
function handleKeypress() {
    const input = document.getElementById("keypress-input");
    const display = document.getElementById("keypress-display");
    display.textContent = `You typed: ${input.value}`;
}

/* Interactive Element: Image Gallery */
const images = [
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
];
let currentImageIndex = 0;

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGalleryImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGalleryImage();
}

function updateGalleryImage() {
    const image = document.getElementById("gallery-image");
    image.src = images[currentImageIndex];
    image.alt = `Gallery image ${currentImageIndex + 1}`;
}

/* Interactive Element: Accordion */
function setupAccordion() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.classList.toggle("active");
        });
    });
}

/* Form Validation */
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!name.value) {
        errorMessage.textContent = "Name is required.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.value.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters.";
        return;
    }

    errorMessage.style.color = "green";
    errorMessage.textContent = "Form submitted successfully!";
}

/* Event Listeners */
document.getElementById("change-text").addEventListener("click", changeText);
document.getElementById("change-color").addEventListener("click", changeColor);
document.getElementById("keypress-input").addEventListener("input", handleKeypress);
document.getElementById("prev-image").addEventListener("click", showPreviousImage);
document.getElementById("next-image").addEventListener("click", showNextImage);
document.getElementById("contact-form").addEventListener("submit", validateForm);

// Initialize accordion
setupAccordion();
