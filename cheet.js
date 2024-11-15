// JavaScript for dynamic typing effect
const message = "Hi! I'm Prahallad Nayak, and I’ve gathered essential programming resources to boost your skills.";
const welcomeContainer = document.getElementById("welcomeMessage");
let index = 0;

function typeText() {
    if (index < message.length) {
        const span = document.createElement("span");
        span.textContent = message[index];
        welcomeContainer.appendChild(span);
        index++;
        setTimeout(typeText, 100); // Adjust speed here (lower for faster typing)
    } else {
        makeBlinking();
    }
}

function makeBlinking() {
    welcomeContainer.classList.add("blink");
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
