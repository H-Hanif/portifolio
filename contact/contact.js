const back = document.querySelector(".back")
const profile = document.querySelector(".profile")
const portofolio = document.querySelector(".Portofolio")
const career = document.querySelector(".career")
const submit = document.querySelector(".submit")


back.addEventListener("click", () => {
    window.location.href = "/index.html";
});

profile.addEventListener("click", () => {
    window.location.href = "/profile/profile.html";
});



portofolio.addEventListener("click", () => {
    window.location.href = "/portofolio/portofolio.html";
});

career.addEventListener("click", () => {
    window.location.href = "/career/career.html";
});

submit.addEventListener("click", () => {
    window.location.href = "/index.html";
});