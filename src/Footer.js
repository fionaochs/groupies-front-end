import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div id='footer-id'>

                
                <Link id='footer-link' to="/about">Meet the Original Groupies</Link>

            </div>
        )
    }
}
