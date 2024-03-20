const back = document.querySelector(".back")
const profile = document.querySelector(".profile")
const career = document.querySelector(".career")
const contact = document.querySelector(".contact")

back.addEventListener("click", () => {
    window.location.href = "/index.html";
});

profile.addEventListener("click", () => {
    window.location.href = "/profile/profile.html";
});



career.addEventListener("click", () => {
    window.location.href = "/career/career.html";
});

contact.addEventListener("click", () => {
    window.location.href = "/contact/contact.html";
});