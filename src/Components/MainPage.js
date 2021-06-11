import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MainPage = () => {
  return (
    <>
      <div>авторизация прошла успешно</div>
      
      <Link to="/todo-app">
        <Button variant="secondary">
          Todo app
        </Button>
      </Link>
    </>
  )
};

export default MainPage;
