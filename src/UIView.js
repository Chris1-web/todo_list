const insertHTML = function (parent, position, html) {
  const container = document.querySelector(`.${parent}`);
  container.insertAdjacentHTML(position, html);
};

const homePageHTML = function () {
  const html = ``;
};

const todoCardHTML = function (todoData) {
  const parent = "todo-cards";
  const html = `
    <div class="todo-card" data-id="${todoData.todoId}">
      <div class="top">
        <h2 class="todo-title">${todoData.title}</h2>
        <div class="right-todo-nav">
          <img class="edit-icon" alt="edit icon" />
          <img class="delete-icon" alt="delete icon" />
        </div>
      </div>
      <p class="todo-description">
        ${todoData.description}
      </p>
    </div>
  `;
  insertHTML(parent, "beforeend", html);
};

const projectListHTML = function (project) {
  const parent = "projects-navigation-list";
  const html = `
    <li class="project" data-id="${project.projectId}">${project.projectName} <span class="delete-project-icon">&#10006</span></li>
  `;
  insertHTML(parent, "beforeend", html);
};

export { insertHTML, todoCardHTML, projectListHTML };
