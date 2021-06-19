import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeFilterName } from '../../../redux/helperFunctions';

const BtnCompleted = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        size='sm'
        variant="secondary"
        onClick={() => dispatch(changeFilterName('completed'))}
      >
        Completed
      </Button>
    </div>
  )
}

export default BtnCompleted;