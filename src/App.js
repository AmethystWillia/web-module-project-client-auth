import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// Import Components
import Login from './components/Login';
import Friendslist from './components/Friendslist';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import NoAuth from './components/NoAuth';

function App() {
  return (
      <div className="App">
        <header>
          <h3>Friends Database</h3>
          <nav>
            <Link to='/login'>Login.</Link>
            <Link to='/friends'>Friends.</Link>
            <Link to='/friends/add'>Add friend.</Link>
            <Link to='/logout'>Logout.</Link>
          </nav>
        </header>
        <h2>Client Auth Project</h2>
        <Switch>
          <PrivateRoute path='/friends/add' component={AddFriend}/>
          <PrivateRoute path='/friends' component={Friendslist}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/noauth' component={NoAuth}/>
        </Switch>
      </div>
  );
};

export default App;
