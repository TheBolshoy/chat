const openPopupButton = document.querySelector('.button');
const closePopupButton = document.getElementById('close-popup-code');
const popup = document.getElementById('popup-code');
const sendCodeButton = document.querySelector("#send-code-button");

openPopupButton.onclick = function() {
    popup.style.display = 'block';
}

closePopupButton.onclick = function() {
    popup.style.display = 'none';
}


sendCodeButton.addEventListener("click", () => {
    let token = document.querySelector("#code-input").value;
    saveTokenCookie(token);
    popup.style.display = 'none'
  });
  
  function saveTokenCookie(token) {
    document.cookie = `Authorization=Bearer ${token}; path=/;`;
  }
