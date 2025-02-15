document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // AI Magic Button
    document.getElementById("aiButton").addEventListener("click", () => {
        alert("🚀 AI Magic Activated! The Future is Now!");
    });
});
