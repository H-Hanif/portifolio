const profile = document.querySelector(".profile")
const portofolio = document.querySelector(".Portofolio")
const career = document.querySelector(".career")
const home = document.querySelector(".homepage")

profile.addEventListener("click", () => {
    window.location.href = "/profile/profile.html";
});



portofolio.addEventListener("click", () => {
    window.location.href = "/portofolio/portofolio.html";
});

career.addEventListener("click", () => {
    window.location.href = "/career/career.html";
});

home.addEventListener("click", () => {
    window.location.href = "/index.html";
});