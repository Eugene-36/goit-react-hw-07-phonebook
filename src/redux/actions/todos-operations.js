import axios from "axios";
import actions from "./userActions";
axios.defaults.baseURL = "http://localhost:4040";

// const fetchTodos = () => (dispatch) => {
//   dispatch(actions.fetchTodoRequest());

//   axios
//     .get("/todos")
//     .then(({ data }) => dispatch(actions.fetchTodoSuccess(data)))
//     .catch((error) => dispatch(actions.fetchTodoError(error)));
// };

const addTodo = (text) => (dispatch) => {
  //const todo = { text, completed: false };
  dispatch(actions.addTodoRequest());
  axios
    .post("/todos", text)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch((error) => dispatch(actions.addTodoError(error)));
};

const deleteTodo = (todoId) => (dispatch) => {
  dispatch(actions.deleteTodoRequest());
  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(actions.deleteTodoSuccess(todoId)))
    .catch((error) => dispatch(actions.deleteTodoError(error)));
};
export default { addTodo, deleteTodo };
