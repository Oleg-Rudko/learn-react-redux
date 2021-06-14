import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import TodoApp from "./TofoApp/TodoApp";

const Routing = () => {
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
