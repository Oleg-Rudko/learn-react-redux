import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import GetId from "./GetId";
import { useDispatch, useSelector } from "react-redux";
import { addTodoToStore } from "../../redux/helperFunctions";
import ButtonAllCompleted from "./ButtonAllCompleted";
import EditInput from "./EditIntput";
import { getEditTodo } from "../../redux/selectors";
import "./todoList.css";

const InputTodoApp = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editTodoName = useSelector(getEditTodo);

  const submit = (e) => {
    if (input && e.charCode === 13) {
      dispatch(
        addTodoToStore({
          id: GetId(),
          isActive: false,
          name: input,
        })
      );
      setInput("");
    }
  };

  const onHandleInput = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div className="content">
      <ButtonAllCompleted />
      {editTodoName.isEdit && <EditInput />}
      <InputGroup className="mb-3">
        <FormControl
          aria-describedby="basic-addon1"
          placeholder="Enter todo task"
          value={input}
          onChange={onHandleInput}
          onKeyPress={submit}
        />
      </InputGroup>
    </div>
  );
};

export default InputTodoApp;
