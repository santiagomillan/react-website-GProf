import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';
import RegisterPage from './pages/register';



function App() {
  return (
    //<div className='App'>
    <Router>
      {/* <Navbar></Navbar> */}
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signin' component = {SigninPage} exact></Route>
        <Route path='/register' component = {RegisterPage} exact></Route>
      </Switch>
      {/* <Home />  */}
    </Router>
  );
}

export default App;
