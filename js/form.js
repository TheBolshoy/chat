//import { format } from '../node_modules/date-fns';

const form = document.querySelector('#input-form')
const send = document.querySelector('.send-button')
const formInput = document.querySelector('.message-textarea')
const template = document.querySelector('#message')
const templateContent = template.content.cloneNode(true);
const messagesContainer = document.querySelector('.messenger')
const messageTextMe = document.querySelector('.text-me')
const messageText = formInput.value


function createHTML() {
    const messagePlate = document.createElement('div')
    const messageText = formInput.value

    messagePlate.setAttribute('class', 'message-me plate')
    //const time = document.querySelector('.time')
    //time.textContent = format(new Date(), 'hh:MM')
    const templateContent = template.content.cloneNode(true);
    messagePlate.append(templateContent);
    messagesContainer.appendChild(messagePlate)
    //document.body.append(templateContent);
    messagePlate.firstChild.textContent = messageText
    //messagePlate.lastChild.textContent = format(new Date(), 'hh:MM')
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

send.addEventListener('click', function (event) {
    event.preventDefault()
    const messageText = formInput.value
    if (messageText.trim() !== '') {
        createHTML()
        formInput.value = ''
    }
})




formInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        createHTML();
        formInput.value = ''
        event.preventDefault(); // Предотвращение перехода на новую строку
    }
});