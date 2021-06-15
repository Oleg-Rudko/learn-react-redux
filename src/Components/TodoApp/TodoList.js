import React from 'react';
import { getTodos } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const arrayTodo = useSelector(getTodos);

  return (
    <ul>
      {arrayTodo.length !== 0 &&
        arrayTodo.map((item) =>
          <li key={item.id}>
            {item.name}
          </li>
        )
      }
    </ul>
  );
};

export default TodoList;