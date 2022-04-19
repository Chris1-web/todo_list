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

const editProject = function () {};

const editTodo = function () {};

const deleteTodo = function () {};

export {
  createNewTodo,
  createProject,
  displayTodo,
  allProjectsArray,
  displayProjectList,
};
