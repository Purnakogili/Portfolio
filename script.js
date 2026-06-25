// ===============================
// TYPING ANIMATION
// ===============================

var typed = new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "Java Developer",
        "Web Developer",
        "MCA Graduate",
        "Frontend Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});

// ===============================
// AOS SCROLL ANIMATION
// ===============================

AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out"
});

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document
                .querySelector("nav a[href*=" + id + "]")
                .classList.add("active");
        }
    });

};

// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 0 25px rgba(0, 255, 123, 0.77)";

    } else {

        header.style.boxShadow =
        "0 0 15px rgba(60, 247, 110, 0.9)";
    }

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00ff88;
color:#000;
font-size:22px;
font-weight:bold;
cursor:pointer;
display:none;
z-index:1000;
box-shadow:0 0 15px #00ff88;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// CONTACT FORM ALERT
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
      "Thank You! Your message has been submitted successfully."
    );

    form.reset();

});

}

// ===============================
// IMAGE HOVER EFFECT
// ===============================

const imageBox = document.querySelector(".image-box");

if(imageBox){

imageBox.addEventListener("mouseenter", () => {

    imageBox.style.transform = "scale(1.05)";
    imageBox.style.transition = "0.5s";

});

imageBox.addEventListener("mouseleave", () => {

    imageBox.style.transform = "scale(1)";
});

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"Portfolio Developed by Purnachandra Kogili 🚀"
);