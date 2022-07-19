import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Forget from './components/Forget';
import { Switch } from 'react-router-dom';
import {Router} from "react-router-dom";



function App() {
  return (
    // <div>
    //   <h1>Hello</h1>
    // </div>
   <Switch>
    <Router path='/feed'>
      <Feed></Feed>
    </Router>
    <Router path='/login'>
      <Login></Login>
    </Router>
    <Router path='/signup'>
      <Signup></Signup>
    </Router>
    <Router path='/profile'>
      <Profile></Profile>
    </Router>
    <Router path='/forget'>
      <Forget></Forget>
    </Router>
    <Router>
      <PageNotFound></PageNotFound>
    </Router>
  </Switch>
  );
}

export default App;
