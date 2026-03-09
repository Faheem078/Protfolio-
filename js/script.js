/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu Show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== CHANGE BACKGROUND HEADER =============== */
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =============== MIXITUP FILTER PORTFOLIO =============== */
let mixerPortfolio = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.filter-item')

function activePortfolio() {
    linkPortfolio.forEach(l => l.classList.remove('active-filter'))
    this.classList.add('active-filter')
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =============== SHOW SCROLL UP =============== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =============== DARK LIGHT THEME =============== */
const themeButton = document.getElementById('theme-button')

// We will toggle data-theme="light" and data-theme="dark" on document.documentElement
const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
        root.setAttribute('data-theme', 'light');
        themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        root.setAttribute('data-theme', 'dark');
        themeButton.classList.replace('ri-sun-line', 'ri-moon-line');
    }
}

if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
}

/* =============== CONTACT FORM VALIDATION =============== */
const contactForm = document.getElementById('contact-form')
const contactInputs = document.querySelectorAll('.contact-form-input')

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let isValid = true;

        contactInputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = 'hsl(0, 80%, 60%)'; // Red error color
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        })

        if (isValid) {
            alert('Success! Your message was sent.');
            contactForm.reset();
        }
    })
}
