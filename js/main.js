import { popupEmail } from "./popup-email";
import { createHTMLUser } from "./createHTMLs";
import { getTokenFromCookie } from "./utilits";

const form = document.getElementById("input-form");
const send = document.querySelector(".send-button");
const formInput = document.querySelector(".message-textarea");
const messageText = formInput.value;

export const token = getTokenFromCookie();
export const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

console.log(token);

window.onload = function () {
  if (
    !document.cookie
      .split(";")
      .some((c) => c.trim().startsWith("Authorization" + "="))
  ) {
    popupEmail.style.display = "block";
  }
  return;
};

form.addEventListener("keypress", function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const message = formInput.value;
    createHTMLUser(message);
    socket.send(
      JSON.stringify({
        text: message,
      })
    );
    formInput.value = "";
}
});
