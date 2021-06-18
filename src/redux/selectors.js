import { createSelector } from "reselect";

export const getTodos = (state) => state.arrayTodos;

export const getAllTodosChecked = createSelector(getTodos, (todos) => {
  const resultOfTodos = todos.find(({ isActive }) => !isActive);
  if (todos.length === 0) return false;
  if (!resultOfTodos) {
    return true;
  } else {
    return false;
  }
});


// 1. Create initial state new key filterTodos by default it'll be default (filterTodos: "default")
// 2. Create new selector getFilterTodos
// 3. Update getTodos selector to reselector and create switch case for filtering
// 4. Create buttons and store the value in redux("default", "complete", "acvite")
