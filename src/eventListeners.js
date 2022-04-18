const addTaskBtn = document.querySelector(".add-task-btn");
const addNewTodoForm = document.querySelector(".add-todo-form");
const addNewProjectForm = document.querySelector(".add-project-form");
const addNewProjectBtn = document.querySelector(".project-plus");
const cancelNewTaskBtn = document.querySelector("#form-cancel-btn");
const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");

const showNewTodoForm = function () {
  addTaskBtn.addEventListener("click", function () {
    addNewTodoForm.classList.toggle("hide");
    addTaskBtn.classList.add("hide");
  });
  addNewTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#todo-description").value;
    const due_date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority-select").value;
    console.log({ title, description, due_date, priority });
    // check current project, project with active with in class
    // use project name
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
  addNewProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#project-name").value;
    console.log({ title });
  });
};

export { showNewTodoForm };
