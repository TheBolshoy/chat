import { popupEmail } from "./popup-email";
import { getHistory } from "./utilits";

const form = document.getElementById("input-form");

window.onload = function () {
  getHistory();
  if (
    !document.cookie
      .split(";")
      .some((c) => c.trim().startsWith("Authorization" + "="))
  ) {
    popupEmail.style.display = "block";
  }
  return;
};


