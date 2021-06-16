import React from "react";
import { getTodos } from "../../redux/selectors";
import { useSelector } from "react-redux";
import BtnRemove from './BtnRemove';
import ItemTask from "./ItemTask";
import "./todoList.css";

const TodoList = () => {
  const arrayTodo = useSelector(getTodos);

  return (
    <ul className="listTodo">
      {arrayTodo.length !== 0 &&
        arrayTodo.map(({ id, name, isActive }) => (
          <div className="listTodoWrap" key={id}>

            <ItemTask
              id={id}
              name={name}
              isActive={isActive}
            />
            <BtnRemove
              id={id}
            />

          </div>
        ))}
    </ul>
  );
};

export default TodoList;
