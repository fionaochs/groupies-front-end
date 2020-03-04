import React, { Component } from 'react'
import SignIn from './SignIn.js'
import './SignIn.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <h1>Groupies</h1>
                    
                    <h2>connecting through concerts </h2>
                </div>
                <SignIn />
            </div>
        )
    }
}
