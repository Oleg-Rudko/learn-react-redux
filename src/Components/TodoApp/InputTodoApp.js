import React, { useState, useMemo } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import GetId from "./GetId";

const InputTodoApp = () => {
  // const [todo, setTodo] = useState({
  //   inputTodo: '',
  //   disabled: true,
  // });
  // let todoList = [];

  // const createTodoList = () => {
  //   let composeId = GetId();
  //   if(todo.inputTodo) {
  //     todoList.push({
  //       id: composeId,
  //       isActive: false,
  //       name: todo.inputTodo,
  //     });
  //     setTodo((prev) => ({
  //       ...prev,
  //       inputTodo: '',
  //     }));
  //   }

  //   console.log(todoList);
  // }
  const [input, setInput] = useState(""); // Should be in react
  const [todos, setTodos] = useState([]); // Should be in redux
  const disabledButton = useMemo(() => {
    if (input) {
      return false;
    } else {
      return true;
    }
  }, [input]);

  const addTodo = ({ target: { value } }) => {
    if (!value) {
      setTodos((prev) => [
        ...prev,
        {
          id: GetId(),
          isActive: false,
          name: input,
        },
      ]);
      setInput("");
    }
  };

  const onHandleInput = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          onClick={addTodo}
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
  );
};

export default InputTodoApp;
