import React from 'react';
import './App.css';
import './SignIn.css'
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ConcertList from "./ConcertList.js"
import Header from './Header';
import Detail from './Detail.js';
// import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Saved from './Saved.js'
import AboutUs from './AboutUs.js'
import HomePage from './HomePage.js'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          {/* <Link to="/saved">Saved</Link>&nbsp;
          <Link to="/">go home</Link>
          <Link to="/about">about us</Link> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/concerts" component={ConcertList} />
            <Route exact path="/concert/:id" component={Detail} />
            <Route exact path="/about" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    )
    }
}
