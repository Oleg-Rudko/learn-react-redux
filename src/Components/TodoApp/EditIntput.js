import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEditTodo } from '../../redux/selectors';
import { InputGroup, FormControl } from 'react-bootstrap';
import { editTodoValue } from '../../redux/helperFunctions';

const EditInput = () => {
  const editTodoName = useSelector(getEditTodo);
  const [input, setInput] = useState(editTodoName.value);
  const dispatch = useDispatch();

  const onHandleInput = ({ target: {value} }) => {
    setInput(value);
  }

  const submit = (e) => {
    if (e.charCode === 13) {
      if(input === '') {
        return setInput(editTodoName.value);
      }
      dispatch(
        editTodoValue({
          id: editTodoName.id,
          isEdit: false,
          value: input,
        })
      )
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-describedby="basic-addon1"
          placeholder="Editing todo"
          value={input}
          onChange={onHandleInput}
          onKeyPress={submit}
        />
      </InputGroup>
    </div>
  )
}

export default EditInput;
