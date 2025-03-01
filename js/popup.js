const openPopupButton = document.querySelector('.setting-button');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openPopupButton.onclick = function() {
    popup.style.display = 'block';
}

closePopupButton.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}


