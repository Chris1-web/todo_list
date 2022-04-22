import "./styles/styles.css";
import loadImages from "./loadImages";
import { showNewTodoForm } from "./eventListeners";
import storageAvailable from "./localStorage";
import loadContent from "./loadContent";

loadImages();
showNewTodoForm();

const presentYear = new Date().getFullYear();
const presentMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");
const presentDay = new Date().getDate().toString().padStart(2, "0");

document.querySelector(
  "#date"
).min = `${presentYear}-${presentMonth}-${presentDay}`;
document.querySelector(
  "#edit-date"
).min = `${presentYear}-${presentMonth}-${presentDay}`;

if (storageAvailable("localStorage")) {
  loadContent();
} else {
  alert("local storage is not available");
}
