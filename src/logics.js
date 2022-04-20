import Project from "./project";
import { projectListHTML } from "./UIView";

const allProjectsArray = [];
const storedProjectAndTasksArray = [];

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
  // // // // // // // // // To be removed // // // // // // // // // // // // //
  // localStorage.setItem("TodoList", JSON.stringify(allProjectsArray));
  // // // // // // // // //// // // // // // // // // // // // // // // // // //
  return newProject;
};

const storeProjectLocalStorage = function (currentProject) {
  // create a copy of current project
  const projectCopy = Object.assign({}, currentProject);
  // get all project tasks
  projectCopy.localTodo = projectCopy.getAllTasks();
  console.log(projectCopy);
  // check if current project exist
  const currentTodoIndex = storedProjectAndTasksArray
    .map((project) => project.projectId)
    .indexOf(projectCopy.projectId);
  // if it exist replace it in the array else create a new copy to be put into array
  if (currentTodoIndex !== -1) {
    storedProjectAndTasksArray[currentTodoIndex] = projectCopy;
  } else {
    storedProjectAndTasksArray.push(projectCopy);
  }
  // store as json in local storage
  localStorage.setItem("TodoList", JSON.stringify(storedProjectAndTasksArray));
  console.log(storedProjectAndTasksArray);
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

export {
  createNewTodo,
  createProject,
  displayTodo,
  allProjectsArray,
  storeProjectLocalStorage,
  displayProjectList,
};
