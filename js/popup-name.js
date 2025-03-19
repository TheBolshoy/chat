import { updateUserName } from "./fetch";

const openPopupButton = document.querySelector(".setting-button");
const closePopupButton = document.getElementById("close-popup-name");
export const popup = document.getElementById("popup-name");
const nameInput = document.querySelector("#name-input");
const sendButton = document.querySelector("#name-popup-button");

openPopupButton.onclick = function () {
  popup.style.display = "block";
};

closePopupButton.onclick = function () {
  popup.style.display = "none";
};

sendButton.onclick = function () {
  let newName = nameInput.value;
  updateUserName(newName);
  popup.style.display = "none";
};
