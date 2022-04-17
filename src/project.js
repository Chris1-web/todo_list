import Todo from "./todo";

const getProjectName = (data) => ({
  projectName: data.projectName,
});

const listTasks = (data) => {
  // get data in all tasks array and log out individual todos
  const listProjectTask = function () {
    data.allTasks.forEach(function (todo) {
      console.log(todo);
    });
  };
  return { listProjectTask };
};
const addTodo = () => ({
  addTodo: (title, description, due_date, priority) =>
    Todo(title, description, due_date, priority),
});

const addTask = (data) => ({
  addTask: (task) => data.allTasks.push(task),
});

const Project = function (projectName = "Welcome") {
  const allTasks = [];
  const data = {
    projectName,
    allTasks,
  };
  return Object.assign(
    {},
    getProjectName(data),
    listTasks(data),
    addTask(data),
    addTodo()
  );
};

export default Project;
