import { number } from "prop-types";
import { createAction } from "@reduxjs/toolkit";

//axios.get("/todos").then((respons) => respons.data);

// const fetchTodoRequest = createAction("todos/fetchTodoRequest");
// const fetchTodoSuccess = createAction("todos/fetchTodoSuccess");
// const fetchTodoError = createAction("todos/fetchTodoError");

const addTodoRequest = createAction("todos/addTodoRequest");
const addTodoSuccess = createAction("todos/addTodoSuccess");
const addTodoError = createAction("todos/addTodoError");
//const addUser = createAction("ADD_USER");
const deleteTodoRequest = createAction("todos/deleteTodoRequest");
const deleteTodoSuccess = createAction("todos/deleteTodoSuccess");
const deleteTodoError = createAction("todos/deleteTodoError");

//const deleteUser = createAction("DELET_USER");

const changeFilter = createAction("CHANGE_FILTER");

//addTodo,
export default {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
};
