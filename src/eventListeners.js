import {
  createProject,
  createNewTodo,
  displayTodo,
  displayProjectList,
} from "./logics";
import { allProjectsArray } from "./logics";

const addTaskBtn = document.querySelector(".add-task-btn");
const addNewTodoForm = document.querySelector(".add-todo-form");
const addNewProjectForm = document.querySelector(".add-project-form");
const addNewProjectBtn = document.querySelector(".project-plus");
const cancelNewTaskBtn = document.querySelector("#form-cancel-btn");
const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");
const projectsConatiner = document.querySelector(".projects-navigation-list");
const todoCardContainer = document.querySelector(".todo-cards");
let currentProject = createProject("Welcome"); //default project is welcome

const getCurrentCard = function (e) {
  const currentCard = e.target.closest(".todo-card");
  return currentCard;
};

const showNewTodoForm = function () {
  addTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.add("hide");
  });
  addNewTodoForm.addEventListener("submit", function (e) {
    // console.log(currentProject);
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
    // create a new todo object
    createNewTodo(currentProject, title, description, due_date, priority);
    // display new todo on screen
    displayTodo(currentProject);
    console.log(currentProject);
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
    document.querySelector("#project-name").value = "";
    cancelNewProjectBtn.click();
    // create a new project
    createProject(title);
    // click newly created project to make it active
    projectsConatiner.lastElementChild.click();
    if (addTaskBtn.classList.contains("hide")) {
      addTaskBtn.classList.remove("hide");
    }
  });
  // change active current project on screen and project itself
  projectsConatiner.addEventListener("click", function (e) {
    if (!e.target.classList.contains("project")) return;
    // loop through all projects and remove active class
    const projects = document.querySelectorAll(".project");
    projects.forEach(function (currentProject) {
      currentProject.classList.remove("active");
    });
    // add active to the clicked element class
    e.target.classList.add("active");
    const currProjectId = e.target.dataset.id;
    // new current project is project navigation with active class
    currentProject = allProjectsArray.filter(
      (project) => project.projectId === currProjectId
    )[0];
    displayTodo(currentProject);
  });
  // delete todo button event listener
  todoCardContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-icon")) return;
    const clickedCardId = getCurrentCard(e).dataset.id;
    console.log(clickedCardId);
    const allProjectTasks = currentProject.getAllTasks();
    console.log(allProjectTasks);
    const currentCardIndex = allProjectTasks
      .map((task) => task.todoId)
      .indexOf(clickedCardId);
    console.log(currentCardIndex);
    allProjectTasks.splice(currentCardIndex, 1);
    displayTodo(currentProject);
  });
  // delete project button event listener
  projectsConatiner.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-project-icon")) return;
    const clickedProject = e.target.closest(".project").dataset.id;
    const clickedProjectIndex = allProjectsArray
      .map((project) => project.projectId)
      .indexOf(clickedProject);
    allProjectsArray.splice(clickedProjectIndex, 1);
    displayProjectList();
    const firstProject = projectsConatiner.firstElementChild;
    if (firstProject) {
      projectsConatiner.firstElementChild.click();
    } else {
      todoCardContainer.textContent = "";
      addTaskBtn.classList.add("hide");
      addNewProjectBtn.click();
    }
  });
};

export { showNewTodoForm };
