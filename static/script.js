document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 AI Script Loaded!");

    // 🔹 Button Click Effect
    const aiButton = document.getElementById("aiButton");
    if (aiButton) {
        aiButton.addEventListener("click", function () {
            this.innerText = "Processing AI Magic...✨";
            this.style.backgroundColor = "#ff5733";
            this.style.transform = "scale(1.1)";
            setTimeout(() => {
                this.innerText = "Try AI Magic";
                this.style.backgroundColor = "#28a745";
                this.style.transform = "scale(1)";
            }, 2000);
        });
    }

    // 🔹 Dark Mode Toggle
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙 Dark Mode";
    themeToggle.id = "themeToggle";
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerText = "☀️ Light Mode";
        } else {
            themeToggle.innerText = "🌙 Dark Mode";
        }
    });

    // 🔹 Floating AI Animation
    const floatingText = document.createElement("div");
    floatingText.innerText = "🤖 AI is Thinking...";
    floatingText.classList.add("floating-text");
    document.body.appendChild(floatingText);
    setInterval(() => {
        floatingText.style.top = Math.random() * 80 + "vh";
        floatingText.style.left = Math.random() * 80 + "vw";
    }, 3000);
});
