import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import {axiosWithAuth} from './utils/axiosWithAuth';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Welcome to Friendbook</h1>
      <p>A place to connect with the people you care about</p>
      <ul>
        <li>
          <Link to='/login'>Lets get started</Link>
        </li>
        <li>
          <Link to='/friends'>Private Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends' component={Friends} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
