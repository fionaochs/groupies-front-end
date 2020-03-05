import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ConcertList from "./ConcertList.js"
import Detail from './Detail.js';
import SignUp from './SignUp.js'
import Saved from './Saved.js'
import AboutUs from './AboutUs.js'
import HomePage from './HomePage.js'
// import Header from './Header.js'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app-div">
          {/* {<Route exact path="/"/> ? <HomePage//> : <Header/>} */}
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
