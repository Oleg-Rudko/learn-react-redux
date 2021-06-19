import React from "react";
import { useSelector } from "react-redux";
import { itemsLeft } from "../../redux/selectors";
import BtnGroup from "./btnGroup/BtnGroup";
import "./todoList.css";

const ActiveItems = () => {
  const countItems = useSelector(itemsLeft);

  return (
    <div className="activeItems">
      <p>{countItems} items left</p>
      <BtnGroup />
    </div>
  ) 
};

export default ActiveItems;
