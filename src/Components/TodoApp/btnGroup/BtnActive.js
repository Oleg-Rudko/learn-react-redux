import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeFilterName } from '../../../redux/helperFunctions';

const BtnActive = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        size='sm'
        variant="success"
        onClick={() => dispatch(changeFilterName('active'))}

      >
        Active
      </Button>
    </div>
  )
}

export default BtnActive;