import React from "react";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";

const LoginPage = () => {
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

export default LoginPage;
