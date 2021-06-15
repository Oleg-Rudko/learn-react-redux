import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../App.css';

const MainPage = () => {
  return (
    <div className='content contentMainpage'>
      <p>Open todo app</p>
      <Link to="/todo-app">
        <Button variant="secondary">Todo app</Button>
      </Link>
    </div>
  );
};

export default MainPage;
