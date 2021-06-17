import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCompleted } from "../../redux/helperFunctions";
import { getAllTodosChecked } from "../../redux/selectors";
const ButtonAllCompleted = () => {
  const dispatch = useDispatch();
  const allTodosChecked = useSelector(getAllTodosChecked);

  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => dispatch(allCompleted({ isActive: e.target.checked }))}
        checked={allTodosChecked}
      />
      check all
    </label>
  );
};

export default ButtonAllCompleted;
