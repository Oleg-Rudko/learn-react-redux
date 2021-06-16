import React from "react";
import { getTodos } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../redux/helperFunctions";
import "./todoList.css";

const TodoList = () => {
  const arrayTodos = useSelector(getTodos);
  const dispatch = useDispatch();

  return (
    <ul className="listTodo">
      {arrayTodos.length !== 0 &&
        arrayTodos.map(({ id, name }) => (
          <div className="listTodoWrap" key={id}>
            <li className="listItem">{name}</li>
            <button
              className="btnRemoveTodo"
              title="Remove task"
              onClick={() => dispatch(removeTodo(id))}
            >
              &#10005;
            </button>
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
