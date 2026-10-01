// ==========================
// File: js/main.js
// Vintage Barbershop Project
// ==========================
// ------ DOM Elements ------
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const featureGrid = document.getElementById("featureGrid");
const ctaBtn = document.getElementById("ctaPrimary");
const ctaText = document.getElementById("ctaText");
const callBtn = document.getElementById("ctaSecondary");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const nav = document.getElementById("nav");
// -------Services Data (Array of Objects) -------//
const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style",
        Image: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard Trim",
        text: "Expert beard shaping and maintenance for a polished look",
        Image: "assets/images/feature-2.jpg"
    },
    {
        title: "Straight Razor Shave",
        text: "Luxurious shaves with warm towels for a smooth finish",
        Image: "assets/images/feature-3.jpg"
    },
    {
        title: "Childrens Haircuts",
        text: "Specialized cuts for kids with a fun and comfortable experience",
        Image: "assets/images/feature-5.jpg"
    }
]
//----- Nav Links (for future use) -----
const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#features" },
    { label: "Book", href: "#cta" },
    { label: "Contact", href: "#footer" }
];
// ----- Helpers / Functions -----
// Update footer year automatically
function setCurrentYear() {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}
// Toggle Mobile Menu Open/Close
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
    isMenuOpen = false;
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
        featureGrid.scrollBy({ left: event.deltaY, behavior: "smooth" });
    }, { passive: false });
}
// 5) CTA Button: "Book Now" (Placeholder behavior)
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
//------- Render Features using map() -------
const renderFeaturesMap = () => {
    const cardsHTML = services.map((service) => {
        return `
        <article class="feature-card">
            <img src="${service.Image}" alt="${service.title}" class="feature-image" />
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
        </article>
        `;
    }).join("");
    featureGrid.innerHTML = cardsHTML;
};
const renderNavigation = () => {
    // Desktop Nav
    if (nav) {
        const navHTML = navLinks.map((link) => {
            return `<a href="${link.href}" class="nav-link">${link.label}</a>`;
        }).join("");
        nav.innerHTML = navHTML;
    };
    // Mobile Nav 
    if (mobileMenu) {
        const mobileHTML = navLinks.map((link) => {
            return `<a href="${link.href}" class="mobile-link">${link.label}</a>`;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    };
}
// ----- Function calls -----
renderFeaturesMap();
renderNavigation();
