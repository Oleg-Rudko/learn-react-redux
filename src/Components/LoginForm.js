import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { backend } from "../backend/store";
// import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    inputRememberMe: false,
  });

  const onHandleInput = ({ target: { type, value } }) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const inputRememberMe = () => {
    setForm((prev) => ({
      ...prev,
      inputRememberMe: !form.inputRememberMe,
    }));
  };

  const handleSubmit = (e) => {
    if (
      form.email === backend.user_credential.email &&
      form.password === backend.user_credential.password &&
      form.inputRememberMe === true
    ) {
      window.localStorage.setItem("isLogin", true);
    }
    e.preventDefault();
  };

  return (
    <div className="logInPag">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={onHandleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={onHandleInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={inputRememberMe}
          />
        </Form.Group>
        {/* <Link to="/main-page"> */}
          <Button variant="success" type="submit">
            Submit
          </Button>
        {/* </Link> */}
      </Form>
    </div>
  );
};

export default LoginForm;
