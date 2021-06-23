import React from "react";
import { getFilterTodos } from "../../redux/selectors";
import { useSelector } from "react-redux";
import BtnRemove from "./BtnRemove";
import ItemTask from "./ItemTask";
import EditingButton from "./EditingButton";
import "./todoList.css";

const TodoList = () => {
  const arrayTodos = useSelector(getFilterTodos);

  return (
    <ul className="listTodo">
      {arrayTodos.length !== 0 &&
        arrayTodos.map(({ id, name, isActive }) => (
          <div className="listTodoWrap" key={id}>
            <EditingButton id={id} name={name} />
            <ItemTask id={id} name={name} isActive={isActive} />
            <BtnRemove id={id} />
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
