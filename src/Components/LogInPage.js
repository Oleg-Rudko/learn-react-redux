import React from "react";
import LoginForm from "./LoginForm";
import MainPage from './MainPage';

const LogInPage = () => {
  return (
    <>
      {localStorage.getItem("isLogin") === "false" ? (
        <LoginForm />
      ) : (
        <MainPage />
      )}
    </>
  );
};

export default LogInPage;
