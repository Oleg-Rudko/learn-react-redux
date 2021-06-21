import { createSelector } from "reselect";

export const getTodos = (state) => state.arrayTodos;
export const getFilterName = (state) => state.filterTodos;

export const getAllTodosChecked = createSelector(getTodos, (todos) => {
  const resultOfTodos = todos.find(({ isActive }) => !isActive);
  if (todos.length === 0) return false;
  if (!resultOfTodos) {
    return true;
  } else {
    return false;
  }
});

export const itemsLeft = createSelector(getTodos, (todos) => {
  return todos.filter(({ isActive }) => !isActive).length;
});

export const getFilterTodos = createSelector(
  getTodos,
  getFilterName,
  (todos, filterName) => {
    switch (filterName) {
      case "active": {
        return todos.filter((todo) => !todo.isActive);
      }

      case "completed": {
        return todos.filter(({ isActive }) => isActive);
      }

      default: {
        return todos;
      }
    }
  }
);
