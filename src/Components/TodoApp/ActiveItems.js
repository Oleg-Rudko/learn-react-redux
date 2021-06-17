import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/selectors";
import "./todoList.css";

const ActiveItems = () => {
  const arrayTodos = useSelector(getTodos);
  const itemsLeft = arrayTodos.length;

  return <p className="activeItems">{itemsLeft} items left</p>;
};

export default ActiveItems;
