import React from "react";
import { Button } from "react-bootstrap";
import { clearTodo } from "../../../redux/helperFunctions";
import { useDispatch} from "react-redux";

const BtnClearTodoList = () => {
const dispatch = useDispatch();

  return (
    <div> 
      <Button
        variant="danger"
        size='sm'
        onClick={() => dispatch(clearTodo())}
      >
        Clear todo list
      </Button>
    </div>
  );
};

export default BtnClearTodoList;
