
import React, { Component } from 'react';
import { 
  Route, 
  BrowserRouter as Router, 
} from 'react-router-dom';
// import Header from './Header.js';
// import Footer from './Footer.js';
import HomePage from './HomePage.js';
import './HomePage.css';

export default class App extends Component {
  render (){
  return (
    <Router>
      <div>
      {/* <Header /> */}
      <Route exact path="/" component={HomePage} />
      {/* <Footer /> */}
      </div>
    </Router>
  )
  }
}


import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ConcertList from "./ConcertList.js"
// import Header from './Header';
import Detail from './Detail.js';
// import AboutMe from './AboutUs.js';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Link to="/">go home</Link>
          <Link to="/about-me/about">about us</Link>
          <Switch>
            <Route exact path="/" component={ConcertList} />
            <Route exact path="/concert/:id" component={Detail} />
            {/* <Route exact path="/:about-me/about" component={AboutMe} /> */}
          </Switch>
        </div>
      </Router>
    )
    }
}