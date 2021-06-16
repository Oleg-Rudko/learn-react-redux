export const addTodoToStore = (arg) => ({
  type: "ADD_TODO",
  value: arg,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  value: id,
});

export const complet = ({isActive, id}) => ({
  type: 'COMPLET_TODO',
  value: isActive,
  id
});
