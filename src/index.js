import "./styles/styles.css";
import Project from "./project";

const project1 = Project();
const todo1 = project1.Todo(
  "charge my phone",
  "I need to charge my phone as soon as the light comes on",
  "02/2022",
  "low",
  false
);

console.log(todo1.title());
console.log(todo1.description());
console.log(todo1.due_date());

// const todo1 = Todo(
//   "charge my phone",
//   "I need to charge my phone as soon as the light comes on",
//   "02/2022",
//   "low",
//   false
// );
// console.log(todo1);

// import { Project } from "./todo";

// // create project
// const project1 = Project();
// const project2 = Project("Personal");
// // create todo in project
// const project1Todo = project1.createTodo(
//   "charge my phone",
//   "I need to charge my phone as soon as the light comes on",
//   "02/2022",
//   "low",
//   false
// );
// project1.addTask(project1Todo);
// const project1Todo2 = project1.createTodo(
//   "charge my laptop",
//   "I need to charge as soon as the light comes on",
//   "12/2020",
//   "high",
//   true
// );
// project1.addTask(project1Todo2);
// console.log(project1);
// console.log(project1Todo);
// console.log(project1Todo2);
// console.log(project1.tasks);
