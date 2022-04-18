import "./styles/styles.css";
import { createNewTodo, createProject, displayTodo } from "./logics";
import { showNewTodoForm } from "./eventListeners";

const project1 = createProject("Personal");
console.log(project1);
createNewTodo(
  project1,
  "charge my phone",
  "I need to charge my phone as soon as the light comes on",
  "02/2022",
  "low"
);
createNewTodo(
  project1,
  "call a friend",
  "Need to call a friend to catch up with old times",
  "02/2023",
  "high"
);
displayTodo(project1);

showNewTodoForm();
