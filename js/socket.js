import { createHTMLBot, createHTMLUser } from "./createHTMLs";
import { getTimeNow, getTokenFromCookie } from "./utilits";

const token = getTokenFromCookie();
const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
console.log(token);

const send = document.querySelector(".send-button");
const formInput = document.querySelector(".message-textarea");

send.addEventListener("click", function (event) {
  event.preventDefault();
  const message = formInput.value;
  createHTMLUser(message);
  if (message) {
    socket.send(
      JSON.stringify({
        text: message,
      })
    );
  }
  formInput.value = "";
});

socket.addEventListener("open", function () {
  console.log("Соединение с websocket установлено.");
});

socket.addEventListener("message", function (event) {
  const data = JSON.parse(event.data);
  console.log(data);
  try {
    const name = data.user.name;
    const email = data.user.email;
    const text = data.text;
    const isoTime = data.updatedAt;
    const time = getTimeNow(isoTime);
    createHTMLBot(text, name, time);
  } catch (error) {
    console.error("Ошибка при разборе JSON:", error, "Данные:", event.data);
  }
  console.log(event);
});

socket.addEventListener("error", function (error) {
  console.error("Ошибка WebSocket", error);
});

socket.addEventListener("close", function () {
  console.log("Соединение закрыто");
});
