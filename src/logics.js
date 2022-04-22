import Project from "./project";
import { projectListHTML } from "./UIView";

const allProjectsArray = [];

const displayProjectList = function () {
  // clear current HTML
  const parentContainer = document.querySelector(".projects-navigation-list");
  const allCurrentProjects = document.querySelectorAll(".project");
  allCurrentProjects.forEach(function (currProject) {
    parentContainer.removeChild(currProject);
  });
  allProjectsArray.forEach(function (project) {
    projectListHTML(project);
  });
  const firstProject = parentContainer.firstElementChild;
  if (firstProject) {
    parentContainer.firstElementChild.classList.add("active");
  }
};

const createProject = function (projectName = "Welcome") {
  const newProject = Project(projectName);
  allProjectsArray.push(newProject);
  displayProjectList();
  return newProject;
};

const storeProject = function (chosenProject) {
  localStorage.setItem(chosenProject.projectId, JSON.stringify(chosenProject));
};

const storeTodo = function (currentProject) {
  // if current project is not saved in local storage already, save it and update
  if (!localStorage.getItem(currentProject.projectId)) {
    storeProject(currentProject);
    const getProject = localStorage.getItem(currentProject.projectId);
    const result = JSON.parse(getProject);
    result.task = currentProject.getAllTasks();
    localStorage.setItem(currentProject.projectId, JSON.stringify(result));
  } else {
    console.log("The proejct is in local storage");
    const getCurrentProject = localStorage.getItem(currentProject.projectId);
    const currentProjectResult = JSON.parse(getCurrentProject);
    currentProjectResult.task = currentProject.getAllTasks();
    localStorage.setItem(
      currentProject.projectId,
      JSON.stringify(currentProjectResult)
    );
  }
};

const createNewTodo = function (
  project,
  title,
  description,
  due_date,
  priority
) {
  const todoProject = project; //project function
  const projectTodo = todoProject.addTodo(
    title,
    description,
    due_date,
    priority
  );
  todoProject.addTask(projectTodo);
  return projectTodo;
};

const displayTodo = function (project) {
  const projectContainer = project;
  projectContainer.listProjectTask();
};

const deleteTodoFromStore = function (currentProject, clickedCardId) {
  //get current project from localStorage and parse it
  const getProjectFromStorage = localStorage.getItem(currentProject.projectId);
  const parsedProject = JSON.parse(getProjectFromStorage);
  // return an array without clicked(deleted) todo
  const getClickedTask = parsedProject.task.filter(
    (task) => task.todoId !== clickedCardId
  );
  // set the localStorage's task to the returned tasks array and replace in localStorage
  parsedProject.task = getClickedTask;
  localStorage.setItem(currentProject.projectId, JSON.stringify(parsedProject));
};

const updateTodoAtStore = function (currentProject, todo) {
  // get current project from localStorage and parse it
  const getProjectFromStorage = localStorage.getItem(currentProject.projectId);
  const parsedProject = JSON.parse(getProjectFromStorage);
  // get index of todo (with ID) from parsed data
  const currentCardIndex = parsedProject.task
    .map((task) => task.todoId)
    .indexOf(todo.todoId);
  // replace old todo with new Todo and replace it in localStorage
  parsedProject.task[currentCardIndex] = todo;
  localStorage.setItem(currentProject.projectId, JSON.stringify(parsedProject));
};

const deleteProjectFromStore = function (projectId) {
  localStorage.removeItem(projectId);
};

export {
  createNewTodo,
  createProject,
  displayTodo,
  allProjectsArray,
  displayProjectList,
  storeProject,
  storeTodo,
  deleteProjectFromStore,
  deleteTodoFromStore,
  updateTodoAtStore,
};
