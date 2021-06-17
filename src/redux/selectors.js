import { createSelector } from "reselect";

export const getTodos = (state) => state.arrayTodo;

export const getAllTodosChecked = createSelector(getTodos, (todos) => {
  const resultOfTodos = todos.find(({ isActive }) => !isActive);
  if (todos.length === 0) return false;
  if (!resultOfTodos) {
    return true;
  } else {
    return false;
  }
});
