import {
  createProject,
  createNewTodo,
  displayTodo,
  displayProjectList,
  storeProjectLocalStorage,
  removeTodoFromLocalStorage,
} from "./logics";
import { allProjectsArray } from "./logics";

const addTaskBtn = document.querySelector(".add-task-btn");
const addNewTodoForm = document.querySelector(".add-todo-form");
const editTodoForm = document.querySelector(".edit-todo-form");
const addNewProjectForm = document.querySelector(".add-project-form");
const addNewProjectBtn = document.querySelector(".project-plus");
const cancelNewTaskBtn = document.querySelector("#form-cancel-btn");
const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");
const projectsConatiner = document.querySelector(".projects-navigation-list");
const todoCardContainer = document.querySelector(".todo-cards");

/************************** default example project *****************************/
let currentProject = createProject("Welcome"); //default project is welcome
// createNewTodo(
//   currentProject,
//   "charge my phone",
//   "I need to charge my phone as soon as the light comes on",
//   "02/2022",
//   "low"
// );
// createNewTodo(
//   currentProject,
//   "call a friend",
//   "Need to call a friend to catch up with old times",
//   "02/2023",
//   "high"
// );
// displayTodo(currentProject);

/************************** default example project *****************************/

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
    document.querySelector("#priority-select").value = "high";
    cancelNewTaskBtn.click();
    // create a new todo object
    createNewTodo(currentProject, title, description, due_date, priority);
    // display new todo on screen
    displayTodo(currentProject);

    // store the project in local storage //
    storeProjectLocalStorage(currentProject);
    // fklmf;ldmf;amf;dlfmd;lf //
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

    // store the todo in local storage //
    storeProjectLocalStorage(currentProject);
    // fklmf;ldmf;amf;dlfmd;lf //
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
    if (!editTodoForm.classList.contains("hide")) {
      editTodoForm.classList.add("hide");
      addTaskBtn.classList.remove("hide");
    }
  });
  // delete todo button event listener
  todoCardContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-icon")) return;
    const clickedCardId = getCurrentCard(e).dataset.id;
    const allProjectTasks = currentProject.getAllTasks();
    const currentCardIndex = allProjectTasks
      .map((task) => task.todoId)
      .indexOf(clickedCardId);
    allProjectTasks.splice(currentCardIndex, 1);
    displayTodo(currentProject);
    if (allProjectTasks.lenght === 0) {
      addTaskBtn.classList.remove("hide");
    }
    storeProjectLocalStorage(currentProject);
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
    // delete project from storedProjectAndTasksArray array
    storeProjectLocalStorage(currentProject);
    removeTodoFromLocalStorage(currentProject);
    // not storeProjectLocalStorage(currentProject);
  });
  // edit todo button event listener
  let cardTodoId;
  todoCardContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("edit-icon")) return;
    const card = getCurrentCard(e);
    let cardPriority;
    const cardBorderColor = card.style.borderColor;
    if (cardBorderColor === "red") {
      cardPriority = "high";
    } else if (cardBorderColor === "green") {
      cardPriority = "medium";
    } else {
      cardPriority = "low";
    }
    cardTodoId = card.dataset.id;
    const cardTitle = card.firstElementChild.firstElementChild.textContent;
    const cardDescription = card.children[1].textContent.trim();
    const cardDate = card.lastElementChild.textContent;
    document.querySelector("#edit-title").value = cardTitle;
    document.querySelector("#edit-todo-description").value = cardDescription;
    document.querySelector("#edit-date").value = cardDate;
    document.querySelector("#edit-priority-select").value = cardPriority;
    addNewTodoForm.classList.add("hide");
    addTaskBtn.classList.add("hide");
    editTodoForm.classList.remove("hide");
  });
  editTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTitle = document.querySelector("#edit-title").value.trim();
    const newDescription = document
      .querySelector("#edit-todo-description")
      .value.trim();
    const new_due_date = document.querySelector("#edit-date").value;
    const newPriority = document.querySelector("#edit-priority-select").value;
    const allProjectTasks = currentProject.getAllTasks();
    const currentCardIndex = allProjectTasks
      .map((task) => task.todoId)
      .indexOf(cardTodoId);
    const getTodo = allProjectTasks[currentCardIndex];
    getTodo.title = newTitle;
    getTodo.description = newDescription;
    getTodo.due_date = new_due_date;
    getTodo.priority = newPriority;
    displayTodo(currentProject);
    document.querySelector("#edit-title").value = "";
    document.querySelector("#edit-todo-description").value = "";
    document.querySelector("#edit-date").value = "";
    document.querySelector("#edit-priority-select").value = "";
    editTodoForm.classList.add("hide");
  });
};

export { showNewTodoForm };
