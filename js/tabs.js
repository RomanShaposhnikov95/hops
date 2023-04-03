const time = 8000
const animationDuration = `${time / 2000}s`;

const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(progressBar => {
    progressBar.style.setProperty('--animation-duration', animationDuration);
});

const buttons = document.querySelectorAll(".tab-button");

let currentIndex = 0;
let timer = setInterval(() => {
    currentIndex++;
    if (currentIndex >= buttons.length) {
        currentIndex = 0;
    }
    buttons[currentIndex].click();
}, time);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        clearInterval(timer);

        currentIndex = i;

        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        buttons.forEach((button) => {
            button.classList.remove("active");
        });

        const tabName = event.currentTarget.getAttribute("data-tab");
        document.getElementById(tabName).classList.add("active");
        event.currentTarget.classList.add("active");

        timer = setInterval(() => {
            currentIndex++;
            if (currentIndex >= buttons.length) {
                currentIndex = 0;
            }
            buttons[currentIndex].click();
        }, time);
    });
}

