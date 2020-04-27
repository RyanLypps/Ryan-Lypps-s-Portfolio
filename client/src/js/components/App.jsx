import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';

function App(props) {
  return (
    <Router basename="/">
      <Route exact path='/' component={ MainPage } />
      <Route path='/about-me' component={ AboutMe } />
      <Route path='/Projects' component={ Projects } />
    </Router>
  );
}

export default App;