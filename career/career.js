const back = document.querySelector(".back")
const profile = document.querySelector(".profile")
const portofolio = document.querySelector(".Portofolio")
const contact = document.querySelector(".contact")

back.addEventListener("click", () => {
    window.location.href = "/index.html";
});

profile.addEventListener("click", () => {
    window.location.href = "/profile/profile.html";
});



portofolio.addEventListener("click", () => {
    window.location.href = "/portofolio/portofolio.html";
});

contact.addEventListener("click", () => {
    window.location.href = "/contact/contact.html";
});