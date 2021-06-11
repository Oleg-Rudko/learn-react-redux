import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './Components/Routing';
// import { Switch, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();
  // const one = useSelector((state) => state.one);
  // const hello = (arg) => {
  //   return {
  //     type: "HELLO",
  //     payload: arg,
  //   };
  // };

  // const submit = () => {
  //   dispatch(hello("hello world"));
  // };

  return (
    <div className="App">
      <Routing />

      {/* <button onClick={submit}>hello</button>
      <div>{one && one}</div> */}
    </div>
  );
};

export default App;
