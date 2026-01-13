// Typing Animation
const phrases = [
    "Justine Kyle Remulta",
    "Aspiring Web Developer",
    "Future Intern"
];
let typingIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typePhrase() {
    if (charIndex < phrases[typingIndex].length) {
        typingElement.textContent += phrases[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typePhrase, 120);
    } else {
        setTimeout(deletePhrase, 1000);
    }
}

function deletePhrase() {
    if (charIndex > 0) {
        typingElement.textContent = phrases[typingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deletePhrase, 60);
    } else {
        typingIndex = (typingIndex + 1) % phrases.length;
        setTimeout(typePhrase, 200);
    }
}
typePhrase();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

// Back-to-Top Button
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.innerHTML = "<i class='fas fa-arrow-up'></i>";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300) backToTop.style.display = "flex";
    else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});
