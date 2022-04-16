import Todo from "./todo";

const getProjectName = (data) => ({
  projectTitle: () => data.projectName,
});

// const Project = function (projectName = "Welcome") {
//   const tasks = [];
//   const addTask = function (task) {
//     tasks.push(task);
//   };
//   return Object.assign({}, { createTodo }, { addTask, projectName, tasks });
// };

// const Project = function (projectName = "Welcome") {};

const Project = function (projectName = "Welcome") {
  const tasks = [];
  const data = {
    projectName,
  };
  return Object.assign({}, getProjectName(data), { Todo });
};

export default Project;
