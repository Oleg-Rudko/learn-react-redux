import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import GetId from './GetId';

const InputTodoApp = () => {
  const [todo, setTodo] = useState({
    inputTodo: '',
    disabled: true,
  });
  let todoList = [];

  const createTodoList = () => {
    let composeId = GetId();
    if(todo.inputTodo) {
      todoList.push({
        id: composeId,
        isActive: false,
        name: todo.inputTodo,
      });
      setTodo((prev) => ({
        ...prev,
        inputTodo: '',
      }));
    }
    

    console.log(todoList);
  }

  const onHandleInput = ({target: { value }}) => {
    setTodo((prev) => ({
      ...prev,
      inputTodo: value,
      disabled: false,
    }));
  };

  return (
     <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          onClick={createTodoList}
          disabled={todo.disabled}
        >
          Add todo
        </Button>
      </InputGroup.Prepend>
      <FormControl 
        aria-describedby="basic-addon1"
        placeholder='Enter todo task'
        value={todo.inputTodo}
        onChange={onHandleInput}
      />
    </InputGroup>
  )
}

export default InputTodoApp;