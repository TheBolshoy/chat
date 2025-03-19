import { createHTMLBot } from "./createHTMLs";
import { socket } from "./main";
import { getTimeNow } from "./utilits";
const messages = []

socket.addEventListener("open", function () {
  console.log("Соединение с websocket установлено.");
});

socket.addEventListener("message", function (event) {
  console.log(event);
  try {
    const data = JSON.parse(event.data);
    const name = data.user.name;
    const email = data.user.email;
    const text = data.text;
    const isoTime = data.updatedAt;
    const time = getTimeNow(isoTime)
    createHTMLBot(text, name, time);
  } catch {
    console.error("Ошибка при разборе JSON:", e, "Данные:", event.data);
  }
});

socket.addEventListener("error", function (error) {
  console.error("Ошибка WebSocket", error);
});

socket.addEventListener("close", function () {
  console.log("Соединение закрыто");
});


