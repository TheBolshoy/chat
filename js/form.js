console.log('ah')
import { format } from './node_modules/date-fns';

const form = document.getElementById('input-form')
const formInput = document.getElementById('message-textarea')
const template = document.querySelector('.message')
const templateContent = template.content.cloneNode(true);


function renderMessageHTML(event) {
    event.preventDefault()
    const messageText = formInput.textContent
    if (messageText.trim() !== '') {
        createHTML()
    }
}

function createHTML() {
    const messagePlate = document.createElement('div')
    messagePlate.setAttribute('class', 'message-me plate')
    const time = document.querySelector('.time')
    time.textContent = format(new Date(), 'hh:MM')
    messagePlate.append(templateContent);
    messageText.value = ''
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

form.addEventListener('submit', renderMessageHTML())
