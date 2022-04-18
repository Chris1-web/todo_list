import { todoCardHTML } from "./UIView";

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
  const data = {
    title,
    description,
    due_date,
    priority,
  };
  return Object.assign(
    {},
    getTitle(data),
    getDescription(data),
    getDueDate(data),
    getPriority(data)
  );
};

export default Todo;
