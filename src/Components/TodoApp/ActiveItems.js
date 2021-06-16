import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/selectors";
import './todoList.css';

const ActiveItems = () => {
  const arrayTodo = useSelector(getTodos);
  const itemLeft = arrayTodo.length;

  return <p className='activeItems'>{itemLeft} items left</p>;
};

export default ActiveItems;
