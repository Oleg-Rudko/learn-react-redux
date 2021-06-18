import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCompleted } from "../../redux/helperFunctions";
import { getAllTodosChecked } from "../../redux/selectors";
const ButtonAllCompleted = () => {
  const dispatch = useDispatch();
  const allTodosChecked = useSelector(getAllTodosChecked);

  return (
    <div className='wrapLabelComplete'>
      <input
        id="checkboxComplete"
        className='checkboxComplete'
        type="checkbox"
        onChange={(e) => dispatch(allCompleted({ isActive: e.target.checked }))}
        checked={allTodosChecked}
      />
      <label for="checkboxComplete">
        Check all
      </label>
    </div>
    
  );
};

export default ButtonAllCompleted;
