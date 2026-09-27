// ==========================
// File: js/main.js
// Vintage Barbershop Project
// ==========================
// ------ DOM Elements ------
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const featureGrid = document.getElementById("featureGrid");
const ctaBtn = document.getElementById("ctaBtn");
const ctaText = document.getElementById("ctaText");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
// ----- Helpers / Functions -----
// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}
// Toggle Mobile Menu OPen/Close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};
// Close Mobile Menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOPen = false;
};
// Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};
// ----- Event Listeners -----
// 1) set year on page load
setCurrentYear();
// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
}
// 3) Close mobile menu when a mobile link is clicked (event delegations)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            closeMobileMenu();
        }
    });
}
// 4) Scroll the horizontal service cards with the mouse wheel
if (featureGrid) {
    featureGrid.addEventListener("wheel", (event) => {
        if (featureGrid.scrollWidth <= featureGrid.clientWidth) return;
        event.preventDefault();
        featureGrid.scrollLeft += event.deltaY;
    }, { passive: false });
}
// 5) BTA Button: "Book Now" (Plaseholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - Great choice!")
    });
}
// 6) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        if (phoneLink) {
            updateHeadingText("Call us at " + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!")
        }
    });
}
