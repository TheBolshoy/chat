import { getRandomColor, getTimeNow } from "./utilits";

const templateUser = document.getElementById("message-user");
const templateBot = document.getElementById("message-bot");
const messagesContainer = document.querySelector(".messenger");

export function createHTMLUser(text) {
  const newDate = new Date()
  const template = templateUser.content.cloneNode(true);
  const sender = template.getElementById("user-name");
  const messageElement = template.getElementById("textTemplateUser");
  const timeDiv = template.getElementById("timeTemplate");
  sender.textContent = "Вы";
  messageElement.textContent = text;
  timeDiv.textContent = getTimeNow(newDate);

  sender.classList.add("name-user");
  timeDiv.classList.add("time");

  messagesContainer.appendChild(template);
}

export function createHTMLBot(text, name, time) {
  const template = templateBot.content.cloneNode(true);
  const sender = template.getElementById("bot-name");
  const messageElement = template.getElementById("textTemplateBot");
  const timeDiv = template.getElementById("timeTemplate");
  sender.textContent = `${name}`;
  sender.style.color = getRandomColor()
  messageElement.textContent = text;
  timeDiv.textContent = time;

  sender.classList.add("name-bot");
  timeDiv.classList.add("time");

  messagesContainer.appendChild(template);
}


export function renderHistoryHTML(results) {
  for (let i = 0; i < 3; i++) {
    const e = Math.floor(Math.random() * 300) + 1
    createHTMLBot(results[e].text, results[e].name, results[e].time);
  }
}
