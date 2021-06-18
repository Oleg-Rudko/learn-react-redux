import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/selectors";
import BtnGroup from "./BtnGroup";
import "./todoList.css";

const ActiveItems = () => {
  const arrayTodos = useSelector(getTodos);
  const itemsLeft = arrayTodos;
  let count = 0;

  itemsLeft.find(({isActive}) => {
    if(!isActive) {
      count += 1;
    }
    return undefined;
  });

  return (
    <div className="activeItems">
      <p>{count} items left</p>
      <BtnGroup />
    </div>
  ) 
};

export default ActiveItems;