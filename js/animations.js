/* =============== CUSTOM CURSOR =============== */
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

/* =============== TYPING ANIMATION (TYPED.JS) =============== */
if (document.getElementById("typing-effect")) {
    const typed = new Typed("#typing-effect", {
        strings: ["Web Developer.", "UI/UX Designer.", "Freelancer.", "Visual Artist."],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home-content, .about-data, .contact-info`)
sr.reveal(`.home-img-wrapper, .about-img-box, .contact-form`, { origin: 'bottom' })
sr.reveal(`.services-card, .portfolio-card, .blog-card, .info-box`, { interval: 100 })
sr.reveal(`.skills-content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.skills-content:nth-child(2)`, { origin: 'right' })
