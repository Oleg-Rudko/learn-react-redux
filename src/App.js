import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import GreatingPage from './Components/GreatingPage';
import ContentPage from './Components/ContentPage';
import Navigation from './Components/Navigation';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/greating' component={GreatingPage} />
          <Route path='/content' component={ ContentPage } />
        </Switch>
      </div>
    </div>
  );
}
