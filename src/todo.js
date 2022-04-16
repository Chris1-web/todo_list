const getTitle = (data) => ({
  title: () => data.title,
});
const getDescription = (data) => ({
  description: () => data.description,
});
const getDueDate = (data) => ({
  due_date: () => data.due_date,
});
const getPriority = (data) => ({
  priority: () => data.priority,
});
const getStatus = (data) => ({
  status: () => data.status,
});

const Todo = function (title, description, due_date, priority, status) {
  const data = {
    title,
    description,
    due_date,
    priority,
    status,
  };
  return Object.assign(
    {},
    getTitle(data),
    getDescription(data),
    getDueDate(data),
    getPriority(data),
    getStatus(data)
  );
};

export default Todo;
