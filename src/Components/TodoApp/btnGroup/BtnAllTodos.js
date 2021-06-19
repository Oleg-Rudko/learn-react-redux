import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeFilterName } from '../../../redux/helperFunctions';

const BtnAllTodos = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        size='sm'
        variant="info"
        onClick={() => dispatch(changeFilterName('dafault'))}

      >
        All Todos
      </Button>
    </div>
  )
}

export default BtnAllTodos;