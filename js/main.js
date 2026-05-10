// Main JavaScript for Santiago & Jhoana's Wedding Website

// Default language
let currentLang = 'en';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    // Set up language switcher
    setupLanguageSwitcher();

    // Set up smooth scrolling
    setupSmoothScroll();

    // Add scroll animations
    setupScrollAnimations();

    // Sticky navigation
    setupStickyNav();

    // Back to top button (mobile only)
    setupBackToTop();
});

// Language Switcher
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update invitation link based on language
    const invitationLink = document.getElementById('invitation-link');
    if (invitationLink) {
        if (lang === 'es') {
            invitationLink.href = 'docs/InvitaciónBoda_.pdf';
        } else {
            // Use English PDF for both English and French
            invitationLink.href = 'docs/Wedding Invitation ONLINE Final - Ingles .pdf';
        }
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

function getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = translations[lang];

    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return null;
        }
    }

    return translation;
}

// Smooth Scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Sticky Navigation
function setupStickyNav() {
    const nav = document.querySelector('.nav');
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        if (window.scrollY > hero.offsetHeight - 100) {
            nav.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');
    const navHeight = document.querySelector('.nav').offsetHeight;

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';

        if (link.getAttribute('href') === '#' + current) {
            link.style.background = 'var(--color-yellow)';
            link.style.color = 'var(--color-white)';
        }
    });
});

// Countdown Timer (optional feature)
function updateCountdown() {
    const weddingDate = new Date('2026-05-23T15:30:00-04:00');
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return null;
}

// Back to Top Button (Mobile Only)
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) return;

    // Only show on mobile devices
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (isMobile() && window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hide on resize if not mobile
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            backToTopBtn.classList.remove('show');
        }
    });
}

// Log welcome message
console.log('%c💍 Santiago & Jhoana - May 23, 2026 💍', 'font-size: 20px; color: #e3b267; font-weight: bold;');
console.log('%cWe can\'t wait to celebrate with you!', 'font-size: 14px; color: #6c8bc2;');
