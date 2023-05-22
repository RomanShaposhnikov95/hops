const chat = document.querySelectorAll('.users-item');
const chatWindowNone = document.querySelector('.chat-content-none');
const chatWindow = document.querySelector('.chat-content-show');
const back = document.querySelector('.closeChat');
const start = document.querySelector('.startChat');

const chatNull = document.querySelector('.chat-content-show-null');
const chatLength = document.querySelector('.chat-content-show-wrap');



for (let i = 0; i < chat.length; i++) {
    chat[i].onclick = function() {
        activateButton(this.id);


        chatWindowNone.classList.add('d-none')
        chatWindow.classList.remove('d-none')
    };
}


function activateButton(buttonId) {
    for (let i = 0; i < chat.length; i++) {
        chat[i].classList.remove("active");
    }
    document.getElementById(buttonId).classList.add("active");
}

start.addEventListener("click", () => {
    chatNull.classList.add('d-none')
    chatLength.classList.remove('d-none')
})

back.addEventListener('click', () => {
    chatWindowNone.classList.remove('d-none')
    chatWindow.classList.add('d-none')

    chatNull.classList.remove('d-none')
    chatLength.classList.add('d-none')

    for (let i = 0; i < chat.length; i++) {
        chat[i].classList.remove("active");
    }
})
