import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import TodoApp from './TodoApp';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/main-page' component={MainPage} />
      <Route path='/todo-app' component={TodoApp} />
    </Switch>
  )
}

export default Routing;
