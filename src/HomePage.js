import React, { Component } from 'react'
import SignIn from './SignIn.js'
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <h1>Groupies</h1>
                    <br />
                    <h2>Connecting through concerts </h2>
                </div>
                <SignIn />
            </div>
        )
    }
}
