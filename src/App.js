import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// Import Components
import Login from './components/Login';

function App() {
  return (
      <div className="App">
        <header>
          <h3>Friends Database</h3>
          <nav>
            <Link to='/login'>Login.</Link>
            <Link to='/friendslist'>Friends.</Link>
            <a href='#'>Add friend.</a>
            <a href='#'>Logout.</a>
          </nav>
        </header>
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path='/friendslist'/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
  );
};

export default App;
