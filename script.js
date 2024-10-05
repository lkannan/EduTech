// Dynamic tagline rotation
const taglines = [
    "Learn at your own pace",
    "Discover new passions",
    "Expand your horizons"
];
let currentTaglineIndex = 0;
const taglineElement = document.getElementById("dynamic-tagline");

function rotateTagline() {
    currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
    taglineElement.textContent = taglines[currentTaglineIndex];
}

setInterval(rotateTagline, 3000);

// Modal functionality
const modal = document.getElementById("contact-modal");
const contactBtn = document.getElementById("contact-us");
const closeBtn = document.getElementsByClassName("close")[0];

contactBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Quiz functionality (placeholder)
const startQuizBtn = document.getElementById("start-quiz");
startQuizBtn.onclick = function() {
    alert("Quiz functionality coming soon!");
}
