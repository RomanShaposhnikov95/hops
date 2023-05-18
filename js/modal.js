const nextStep = document.querySelector('.btn-l')
const modals = document.querySelectorAll('.warning-modal')



nextStep.addEventListener('click', () => {
    modals.forEach(el => {
        if (el.classList.contains('d-none')) {
            el.classList.remove('d-none')
        } else {
            el.addEventListener('click', () => {
                el.classList.add('d-none')
            })
        }

    })
})


modals.forEach(el => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('d-none')) {
            el.classList.add('d-none')
        }
    })
})
