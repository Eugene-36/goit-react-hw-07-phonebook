import { number } from "prop-types";
import { createAction } from "@reduxjs/toolkit";

const addUser = createAction("ADD_USER");

const deleteUser = createAction("DELET_USER");

const changeFilter = createAction("CHANGE_FILTER");

export default { addUser, deleteUser, changeFilter };
