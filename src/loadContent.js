import { currentProject } from "./eventListeners";
import {
  createProject,
  createNewTodo,
  allProjectsArray,
  storeProject,
} from "./logics";
import { projectListHTML } from "./UIView";

const loadContent = function () {
  // if localStorage is not empty, empty the allProjectsArray that is created automatically from createProject function
  if (localStorage.length !== 0) {
    allProjectsArray.length = 0;
  }
  // else store it the localStorage and empty thr array
  else {
    storeProject(currentProject);
    allProjectsArray.length = 0;
  }
  for (let [key, value] of Object.entries(localStorage)) {
    const parsedValue = JSON.parse(value);
    // console.log(parsedValue);
    const newProject = createProject(parsedValue.projectName);
    newProject.projectId = parsedValue.projectId;
    // console.log(newProject);
    if (parsedValue.task) {
      parsedValue.task.forEach(function (todo) {
        const newTodo = createNewTodo(
          newProject,
          todo.title,
          todo.description,
          todo.due_date,
          todo.priority
        );
        newTodo.todoId = todo.todoId;
      });
    }
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
      firstProject.click();
      parentContainer.firstElementChild.classList.add("active");
    }
  }
};

export default loadContent;
