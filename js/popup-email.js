import { popup } from "./popup-name";

const closePopupButton = document.getElementById("close-popup-email");
export const popupEmail = document.getElementById("popup-email");
const codePopup = document.getElementById("popup-code");
const getCodeButton = document.querySelector("#get-code-button");

closePopupButton.onclick = function () {
  popupEmail.style.display = "none";
};

window.onclick = function (event) {
  if (
    event.target == popup ||
    event.target == popupEmail ||
    event.target == codePopup
  ) {
    popup.style.display = "none";
    popupEmail.style.display = "none";
    codePopup.style.display = "none";
  }
};

getCodeButton.addEventListener("click", async () => {
  const email = document.querySelector("#email-input").value;
  const endpoint = "https://edu.strada.one/api/user";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (!response.ok) {
      throw new Error("Ошибка при отправке email");
    } else {
      console.log("Код отправлен");
      popupEmail.style.display = "none";
      codePopup.style.display = "block";
    }
  } catch (error) {
    console.log(error.message);
  }
});
