window.addEventListener("load", () => {
    const openMenu = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const feature = document.querySelector(".feature");
    const WinHeight = window.innerHeight;
    openMenu.addEventListener("click", () => {
        navLinks.classList.toggle("nav-links-open");
        openMenu.classList.toggle("active");
    });
    window.addEventListener("scroll", () => {
        if (feature.getBoundingClientRect().top >= -feature.offsetHeight + 80 && feature.getBoundingClientRect().top <= WinHeight / 1.3) {
            feature.style.opacity = 1;
        }
        else {
            feature.style.opacity = 0;
        }
    });
});