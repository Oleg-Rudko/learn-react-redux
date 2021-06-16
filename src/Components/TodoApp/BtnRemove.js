import React from "react";
import { removeTodo } from "../../redux/helperFunctions";
import { useDispatch } from "react-redux";

const BtnRemove = ({id}) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btnRemoveTodo"
      title="Remove task"
      onClick={() => dispatch(removeTodo(id))}
    >
      X
    </button>
  );
};

export default BtnRemove;
