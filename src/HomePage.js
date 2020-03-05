import React, { Component } from 'react'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import './HomePage.css'
import Concert from './groupies2.jpg'
export default class HomePage extends Component {
    state = {
        isSignUp: false
    }
    render() {
        
        return (
            <div className="homepage-container">
                <div className="logo">
                    <h1>Groupies</h1>
                    <br />
                    <h2>Connecting through concerts </h2>
                </div>
                <img id="concert-image" src={Concert} alt="concert"/>

                {this.state.isSignUp ? <SignUp /> : <SignIn/>}

                <button type="button" className={this.state.isSignUp ? 'hidden' : ''}
                onClick={ () => { this.setState({isSignUp: true}) }}>Sign Up</button>
            </div>
        )
    }
}
