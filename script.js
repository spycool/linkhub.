document.addEventListener('DOMContentLoaded', () => {
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️ Світла тема";
    } else {
        themeButton.textContent = "🌙 Змінити тему";
    }
});
})
