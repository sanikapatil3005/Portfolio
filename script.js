

/* ===== SCROLL TO TOP BUTTON ===== */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ===== LANGUAGES CLICK ACTIVE UNDERLINE ===== */
const langCards = document.querySelectorAll('.lang-card');

langCards.forEach(card => {
    card.addEventListener('click', () => {
        langCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});



