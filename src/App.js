import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import GreatingPage from "./Components/GreatingPage";
import ContentPage from "./Components/ContentPage";
import Navigation from "./Components/Navigation";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const one = useSelector((state) => state.one);
  const hello = (arg) => {
    return {
      type: "HELLO",
      payload: arg,
    };
  };

  const submit = () => {
    dispatch(hello("hello world"));
  };

  return (
    <div className="App">
      <Navigation />
      <button onClick={submit}>hello</button>
      <div>{one && one}</div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/greating" component={GreatingPage} />
          <Route path="/content" component={ContentPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
