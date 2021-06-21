import React from "react";
import { useDispatch } from "react-redux";
import { editTodoValue } from "./../../redux/helperFunctions";
import EditIcon from '../../img/edit_icon.svg';

const EditingButton = ({ id, name }) => {
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(
      editTodoValue({
        id: id,
        value: name,
        isEdit: true,
      })
    );
  };
  
  return (
    <div className="editTodoWrap">
      <button onClick={editTodo} className="editTodoBtn">
        <img
          className="editTodoImg"
          src={EditIcon}
          alt='Edit button'
        />
      </button>
    </div>
  );
};

export default EditingButton;
