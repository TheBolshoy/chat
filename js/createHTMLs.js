import { getTimeNow } from "./utilits";

const templateUser = document.getElementById("message-user");
const templateBot = document.getElementById("message-bot");
const messagesContainer = document.querySelector(".messenger");

export function createHTMLUser(text) {
  const newDate = new Date()
  const template = templateUser.content.cloneNode(true);
  //const plate = template.getElementById("plate-user");
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
  //const plate = template.getElementById("plate-bot");
  const sender = template.getElementById("bot-name");
  const messageElement = template.getElementById("textTemplateBot");
  const timeDiv = template.getElementById("timeTemplate");
  sender.textContent = `${name}`;
  messageElement.textContent = text;
  timeDiv.textContent = time;

  sender.classList.add("name-bot");
  timeDiv.classList.add("time");

  messagesContainer.appendChild(template);
}

