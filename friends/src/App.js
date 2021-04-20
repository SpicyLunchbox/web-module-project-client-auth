import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
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
        <li>
          <Link to='/addFriend'>Add a friend</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/addFriend' component={AddFriend} />
        <PrivateRoute path='/friends' component={Friends} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
