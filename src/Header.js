import React, { Component } from 'react'
import './Header.css'
import ConcertHeader from './groupies2.jpg'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <header id="header-text">Groupies</header>
                <img id="header-image" src={ConcertHeader} alt="concert"/>

            </div>
        )
    }
}
