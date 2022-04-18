const insertHTML = function (parent, position, html) {
  const container = document.querySelector(`.${parent}`);
  container.insertAdjacentHTML(position, html);
};

const homePageHTML = function () {
  const html = ``;
};

const todoCardHTML = function () {
  const parent = "todo-cards";
  const html = `
    <div class="todo-card">
      <h2 class="todo-title">Lorem ipsum dolor</h2>
      <p class="todo-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        cum! Sint veritatis molestiae, sapiente vel dignissimos repellat
        reiciendis voluptatibus sit facere est? Veritatis eos, neque
        nostrum alias sequi quae unde. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aliquid nemo unde dicta accusamus
        voluptatum sed sequi labore sapiente cum doloremque pariatur non,
        dignissimos nulla odit rerum tempore! Possimus, aliquam quidem.
      </p>
    </div>
  `;
};

export { insertHTML, todoCardHTML };
