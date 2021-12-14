import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// Import Components
import Login from './components/Login';
import Friendslist from './components/Friendslist';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

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
        <Route path='/friends/add' component={AddFriend}/>
          <Route path='/friends' component={Friendslist}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
  );
};

export default App;
