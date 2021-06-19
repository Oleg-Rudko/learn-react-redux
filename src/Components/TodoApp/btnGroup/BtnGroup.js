import React from "react";
import BtnClearTodoList from "./BtnClearTodoList";
import GroupOfControlBtn from "./GroupOfControlBtn";
import '../todoList.css';

const BtnGroup = () => {
  return (
    <div className='btnGroup'>
      <GroupOfControlBtn />
      <BtnClearTodoList />
    </div>
  );
};

export default BtnGroup;
