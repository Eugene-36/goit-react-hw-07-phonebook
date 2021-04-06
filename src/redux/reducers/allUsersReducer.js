import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/userActions";
const contacts = createReducer([], {
  ADD_USER: (state, { payload }) => [...state, payload],
  DELET_USER: (state, { payload }) =>
    state.filter((elem) => elem.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
