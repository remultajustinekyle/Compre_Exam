/* Typing Animation */
const text = "Justine Kyle Remulta";
let index = 0;
const speed = 120;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* Skill Progress Animation */
const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight - 100) {
            const value = bar.getAttribute("data-progress");
            bar.style.width = value + "%";
        }
    });
}

window.addEventListener("scroll", animateSkills);
animateSkills();
