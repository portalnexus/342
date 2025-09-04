document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        let time = 90 * 60; // 1.5 hours in seconds

        function updateTimer() {
            const hours = Math.floor(time / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
            const seconds = (time % 60).toString().padStart(2, '0');

            timerElement.textContent = `${hours}:${minutes}:${seconds}`;

            if (time > 0) {
                time--;
            } else {
                clearInterval(timerInterval);
                timerElement.textContent = "Tempo Esgotado!";
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);
    }
});
