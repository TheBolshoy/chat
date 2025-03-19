import { getTokenFromCookie } from "./utilits";

export async function updateUserName(newName) {
  const token = getTokenFromCookie();
  if (!token) {
    console.error("Нет токена авторизации");
    return;
  }
  const response = await fetch("https://edu.strada.one/api/user", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newName }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.error("Ошибка при обновлении имени:", errorMessage);
  } else {
    console.log("Имя успешно обновлено");
  }
}
