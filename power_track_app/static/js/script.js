// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the menu toggle button and navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".menu-nav");

    // Toggle the menu and button classes when the toggle button is clicked
    menuToggle.addEventListener("click", () => {
        menuNav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
