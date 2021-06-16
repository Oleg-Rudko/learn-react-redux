import React from "react";
import { getTodos } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../redux/helperFunctions";
import "./todoList.css";

const TodoList = () => {
  const arrayTodo = useSelector(getTodos);
  const dispatch = useDispatch();

  return (
    <ul className="listTodo">
      {arrayTodo.length !== 0 &&
        arrayTodo.map(({ id, name }) => (
          <div className='listTodoWrap' key={id}>
            <li className="listItem" >
              {name}
            </li>
            <button
              className="btnRemoveTodo"
              title='Remove task'
              onClick={() => dispatch(removeTodo(id))}
            >
              X
            </button>
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
