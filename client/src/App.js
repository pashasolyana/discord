import React from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (<>
  <Router>
    <Switch>
      <Route exact path ='/signin'>
        <LoginPage />
      </Route>
      <Route exact path ='/signup'>
        <RegisterPage />
      </Route>
      <Route exact path ='/dashboard'>
        <Dashboard />
      </Route>
      <Route exact path ='/'>
        <Redirect to='/dashboard' />
      </Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
