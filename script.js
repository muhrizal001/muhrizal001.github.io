// Animasi Skill Bar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
});

// Dark Mode Toggle
const darkModeButton = document.getElementById("toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Form Submit Dummy
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan telah dikirim!");
});
