export const addTodoToStore = (arg) => ({
  type: "ADD_TODO",
  value: arg,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  value: id,
});

export const complete = ({ isActive, id }) => ({
  type: "COMPLETE_TODO",
  value: isActive,
  id,
});

export const allCompleted = ({ isActive}) => ({
  type: 'ALL_COMPLETE',
  value: isActive,
})