import React from 'react';
import InputTodoApp from './InputTodoApp';
import TodoList from './TodoList';
import ActiveItems from './ActiveItems';

const TodoApp = () => {
  return (
    <div>
      <InputTodoApp />
      <TodoList />
      <ActiveItems />
    </div>
  )
}

export default TodoApp;
