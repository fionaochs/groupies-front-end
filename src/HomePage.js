import React, { Component } from 'react'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import './HomePage.css'

export default class HomePage extends Component {
    state = {
        isSignUp: false
    }
    render() {
        
        return (
            <div className="container">
                <div className="logo">
                    <h1>Groupies</h1>
                    <br />
                    <h2>Connecting through concerts </h2>
                </div>

                {this.state.isSignUp ? <SignUp /> : <SignIn/>}

                {/* {this.state.isSignUp ? } */}
                <button type="button" className={this.state.isSignUp ? 'hidden' : ''}
                onClick={ () => { this.setState({isSignUp: true}) }}>Sign Up</button>
            </div>
        )
    }
}
