import "./styles/styles.css";
import loadImages from "./loadImages";
import { displayTodo } from "./logics";
import { showNewTodoForm } from "./eventListeners";
import storageAvailable from "./localStorage";

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
  //   alert("local storage is available");
  //   const storedProject = localStorage.getItem("TodoList");
  //   console.log(JSON.parse(storedProject));
} else {
  alert("local storage is not available");
}
