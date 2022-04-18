import "./styles/styles.css";
import loadImages from "./loadImages";
import { createNewTodo, createProject, displayTodo } from "./logics";
import { showNewTodoForm } from "./eventListeners";

// const project1 = Project();
// // const todo1 = project1.addTodo(
// //   "charge my phone",
// //   "I need to charge my phone as soon as the light comes on",
// //   "02/2022",
// //   "low"
// // );

// const todo2 = project1.addTodo(
//   "charge my laptop",
//   "I need to charge as soon as the light comes on. yep",
//   "12/2020",
//   "high"
// );
// const todo3 = project1.addTodo(
//   "climb the ladder",
//   "watch a movie about climbing the ladder",
//   "12/2022",
//   "medium"
// );
// const todo4 = project1.addTodo(
//   "Watch NBA playoff",
//   "Watch the NBA playoff on ESPN DStv",
//   "15/2022",
//   "high"
// );

// console.log(todo1.title);
// console.log(todo1.description);
// console.log(todo1.due_date);
// console.log(project1);
// project1.addTask(todo1);
// project1.addTask(todo2);
// project1.addTask(todo3);
// project1.addTask(todo4);
// project1.listProjectTask();

// const project2 = Project("Personal");
// const todoOne = project2.addTodo(
//   "charge my phone two",
//   "I need to charge my phone as soon as the light comes on",
//   "02/2022",
//   "low"
// );

// const todoTwo = project2.addTodo(
//   "charge my laptop two",
//   "I need to charge as soon as the light comes on. yep",
//   "12/2020",
//   "high"
// );
// const todoThree = project2.addTodo(
//   "climb the ladder two",
//   "watch a movie about climbing the ladder",
//   "12/2022",
//   "medium"
// );
// const todoFour = project2.addTodo(
//   "Watch NBA playoff two",
//   "Watch the NBA playoff on ESPN DStv",
//   "15/2022",
//   "high"
// );

// console.log(project2);
// project2.addTask(todoOne);
// project2.addTask(todoTwo);
// project2.addTask(todoThree);
// project2.addTask(todoFour);
// project2.listProjectTask();

const project1 = createProject();
console.log(project1);
createNewTodo(
  project1,
  "charge my phone",
  "I need to charge my phone as soon as the light comes on",
  "02/2022",
  "low"
);
createNewTodo(
  project1,
  "call a friend",
  "Need to call a friend to catch up with old times",
  "02/2023",
  "high"
);
displayTodo(project1);

// load all images on page
loadImages();
showNewTodoForm();
