import Todo from "./todo";
import { v4 as uuidv4 } from "uuid";
import { todoCardHTML } from "./UIView";
import loadImages from "./loadImages";

const getProjectName = (data) => ({
  projectName: data.projectName,
});

const getProjectId = (data) => ({
  projectId: data.projectId,
});
const listTasks = (data) => {
  // get data in all tasks array and log out individual todos
  const listProjectTask = function () {
    // clar current todo cards content
    document.querySelector(".todo-cards").textContent = "";
    // redisplay from array to screen
    data.allTasks.forEach(function (todo) {
      todoCardHTML(todo);
      loadImages();
    });
  };
  return { listProjectTask };
};
const addTodo = () => ({
  addTodo: (title, description, due_date, priority) =>
    Todo(title, description, due_date, priority),
});

const getAllTasks = (data) => ({
  getAllTasks: () => data.allTasks,
});

const addTask = (data) => ({
  addTask: (task) => data.allTasks.push(task),
});

const Project = function (projectName = "Welcome") {
  const projectId = uuidv4();
  const allTasks = [];
  const data = {
    projectName,
    allTasks,
    projectId,
  };
  return Object.assign(
    {},
    getProjectName(data),
    listTasks(data),
    addTask(data),
    addTodo(),
    getProjectId(data),
    getAllTasks(data)
  );
};

export default Project;
