import { popup } from "./popup-name";

const closePopupButton = document.getElementById("close-popup-email");
const popupEmail = document.getElementById("popup-email");
const codePopup = document.getElementById("popup-code");
const emailInput = document.getElementById("email-input");
const getCodeButton = document.querySelector("#get-code-button");

window.onload = function () {
  popupEmail.style.display = "block";
};

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

// sendCodeButton.addEventListener("click", async () => {
//   const code = document.querySelector("#code-input").value;
//   const endpoint = "https://edu.strada.one/api/user";

//   try {
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ code: code, name: "name"}),

//     });

//     if (!response.ok) {
//       throw new Error("Не удалось авторизоваться: " + response.statusText);
//     }

//     const data = await response.json();

//     // Предполагаем, что токен будет в поле `token`
//     console.log('data');

//     const token = data.token;

//     // Устанавливаем куки с заголовком Authorization
//     document.cookie = `Authorization=Bearer ${token}; path=/;`;

//     console.log("Авторизация успешна:", data);
//   } catch (error) {
//     console.error("Ошибка при авторизации:", error);
//   }
// });

//sendCodeButton.addEventListener("click", function () {
//popup.style.display = "none";
//codePopup.style.display = "none";
//});






