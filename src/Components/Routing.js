import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import TodoApp from "./TodoApp";

const Routing = () => {
  console.log(localStorage.getItem("isLogin"));
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/main-page" component={MainPage} />
      <Route path="/todo-app" component={TodoApp} />
      {localStorage.getItem("isLogin") && <Redirect to="/" />}
    </Switch>
  );
};

export default Routing;
