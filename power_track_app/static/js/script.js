document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".menu-nav");

    menuToggle.addEventListener("click", () => {
        menuNav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
