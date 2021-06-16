export const addTodoToStore = (arg) => ({
  type: "ADD_TODO",
  value: arg,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  value: id,
});