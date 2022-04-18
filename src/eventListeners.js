import { createProject, createNewTodo, displayTodo } from "./logics";
import { projectListHTML, todoCardHTML } from "./UIView";

const addTaskBtn = document.querySelector(".add-task-btn");
const addNewTodoForm = document.querySelector(".add-todo-form");
const addNewProjectForm = document.querySelector(".add-project-form");
const addNewProjectBtn = document.querySelector(".project-plus");
const cancelNewTaskBtn = document.querySelector("#form-cancel-btn");
const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");
let currentProject = createProject("Welcome");

const showNewTodoForm = function () {
  addTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.add("hide");
  });
  addNewTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const description = document
      .querySelector("#todo-description")
      .value.trim();
    const due_date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority-select").value;
    document.querySelector("#title").value = "";
    document.querySelector("#todo-description").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#priority-select").value = "High Priority";
    cancelNewTaskBtn.click();
    // check current project, project with active with in class
    // use project name
    // create new todo
    const newTodo = createNewTodo(
      currentProject,
      title,
      description,
      due_date,
      priority
    );
    // display card (to be chnanged, because display would be by loop)
    // todoCardHTML(newTodo);
    displayTodo(currentProject);
    console.log(newTodo);
  });
  cancelNewTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.remove("hide");
  });
  cancelNewProjectBtn.addEventListener("click", function () {
    addNewProjectForm.classList.add("hide");
  });
  addNewProjectBtn.addEventListener("click", function () {
    addNewProjectForm.classList.remove("hide");
  });
  // create a new project
  addNewProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#project-name").value.trim();
    addNewProjectForm.classList.add("hide");
    console.log({ title });
    document.querySelector("#project-name").value = "";
    cancelNewProjectBtn.click();
    // create a new project
    const newProject = createProject(title);
    projectListHTML(title);
    console.log(newProject);
  });
};

export { showNewTodoForm };
