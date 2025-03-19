export function getTimeNow(param) {
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
      console.log(data);
      const arrays = await data.messages;
      console.log(arrays);
    }
  } catch (error) {
    console.log(error.message);
  }
}
