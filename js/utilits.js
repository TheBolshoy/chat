import { renderHistoryHTML } from "./createHTMLs";

const colors = ['#011a4b', '#618f98', '#ad473f', '#ad473f', '#0084b9', '#423227', '#e78f08'];

export function getTimeNow() {
  const date = new Date();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;
  return time;
}

export function saveTokenCookie(token) {
  document.cookie = `Authorization=${token}; path=/;`;
}

export function getTokenFromCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; Authorization=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
}

export async function getHistory() {
  const token = getTokenFromCookie();
  try {
    const response = await fetch("https://edu.strada.one/api/messages/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка при загрузке последних сообщений");
    } else {
      const data = await response.json();
      const messagesArrays = await data.messages;
      getLastMessages(messagesArrays);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function getLastMessages(array) {
  const lastMessages = array.slice(-300);
  const timeISO = lastMessages.updatedAt
  const results = lastMessages.map((item) => ({
    name: item.user.name,
    text: item.text,
    time: getTimeNow(timeISO),
    email: item.user.email,
  }));
  renderHistoryHTML(results);
}

export function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex]; 
}




