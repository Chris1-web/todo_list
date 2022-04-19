import { v4 as uuidv4 } from "uuid";

const getId = (data) => ({
  todoId: data.todoId,
});

const getTitle = (data) => ({
  title: data.title,
});
const getDescription = (data) => ({
  description: data.description,
});
const getDueDate = (data) => ({
  due_date: data.due_date,
});
const getPriority = (data) => ({
  priority: data.priority,
});

const Todo = function (title, description, due_date, priority) {
  const todoId = uuidv4();
  const data = {
    title,
    description,
    due_date,
    priority,
    todoId,
  };
  return Object.assign(
    {},
    getTitle(data),
    getDescription(data),
    getDueDate(data),
    getPriority(data),
    getId(data)
  );
};

export default Todo;
