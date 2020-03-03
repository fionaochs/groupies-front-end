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

