import React, { useState, useMemo } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import GetId from "./GetId";
import { useDispatch } from "react-redux";
import { addTodoToStore } from "../../redux/helperFunctions";
import '../../App.css';

const InputTodoApp = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    if (input) {
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

  const disabledButton = useMemo(() => {
    if (input) {
      return false;
    } else {
      return true;
    }
  }, [input]);

  const onHandleInput = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div className='content'>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            onClick={submit}
            disabled={disabledButton}
          >
            Add todo
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          placeholder="Enter todo task"
          value={input}
          onChange={onHandleInput}
        />
        </InputGroup>
    </div>
  );
};

export default InputTodoApp;
