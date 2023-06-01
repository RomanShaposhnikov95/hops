(function () {
    const allCirc = document.querySelectorAll('.circ')
    const result = document.querySelector('.circ-result');


    allCirc.forEach(el => {
        const controller = el.querySelector('input[type=range]');
        const radialProgress = el.querySelector('.RadialProgress');

        const setProgress = (progress) => {
            const value = `${progress}%`;
            radialProgress.style.setProperty('--progress', value)
            if (el.classList.contains("circ-general")) {
                result.innerHTML = value
            }
            radialProgress.setAttribute('aria-valuenow', value)
        }

        setProgress(controller.value)
        controller.oninput = () => {
            setProgress(controller.value)
        }
    })

})()
