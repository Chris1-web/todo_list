import Project from "./project";

const createProject = function (projectName = "Welcome") {
  const newProject = Project(projectName);
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

const displayProjectList = function (project) {
  // const projectContainer = project;
  // projectContainer.listProjectTask();
};

const editProject = function () {};

const editTodo = function () {};

const deleteTodo = function () {};

export { createNewTodo, createProject, displayTodo };
