import React from "react";
import { Button } from "react-bootstrap";
import { clearTodo } from "../../redux/helperFunctions";
import { useDispatch} from "react-redux";

const BtnClearCompleted = () => {
const dispatch = useDispatch();
  

  return (
    <div> 
      <Button
        variant="danger"
        onClick={() => dispatch(clearTodo())}
      >
        Danger
      </Button>
    </div>
  );
};

export default BtnClearCompleted;
