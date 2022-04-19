import "./styles/styles.css";
import loadImages from "./loadImages";
import { createNewTodo, createProject, displayTodo } from "./logics";
import { showNewTodoForm } from "./eventListeners";

loadImages();

const exampleProject = createProject("Personal");
console.log(exampleProject.projectId);
console.log(exampleProject);
createNewTodo(
  exampleProject,
  "charge my phone",
  "I need to charge my phone as soon as the light comes on",
  "02/2022",
  "low"
);
createNewTodo(
  exampleProject,
  "call a friend",
  "Need to call a friend to catch up with old times",
  "02/2023",
  "high"
);
displayTodo(exampleProject);

showNewTodoForm();
