import Project from "./project";
import { projectListHTML } from "./UIView";

const allProjectsArray = [];
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

const displayProjectList = function () {
  // clear current html
  const parentContainer = document.querySelector(".projects-navigation-list");
  parentContainer.textContent = "";
  // learn first project example
  projectListHTML("Welcome");
  parentContainer.firstElementChild.classList.add("active");
  // create html for new html from project list array loop
  allProjectsArray.forEach(function (project) {
    projectListHTML(project.projectName);
    console.log(project);
  });
};

const editProject = function () {};

const editTodo = function () {};

const deleteTodo = function () {};

export { createNewTodo, createProject, displayTodo, allProjectsArray };
