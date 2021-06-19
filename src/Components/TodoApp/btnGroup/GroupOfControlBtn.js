import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import BtnActive from './BtnActive';
import BtnCompleted from './BtnCompleted';
import BtnAllTodos from './BtnAllTodos';

const GroupOfControlBtn = () => {
  return (
    <div>
      <ButtonGroup size="sm">
        <BtnAllTodos />
        <BtnActive />       
        <BtnCompleted />
      </ButtonGroup>
    </div>
  )
}

export default GroupOfControlBtn;