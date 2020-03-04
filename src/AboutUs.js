import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus-container">
                <div className="aboutus">
                    <h1>The Groupies</h1>
                    <ul className="groupies">
                        <li>
                            <img className="member-photo" alt=""></img>
                            <h2>Hannah Riley</h2>
                            <p></p>
                        </li>
                        <li>
                            <img className="member-photo" alt=""></img>
                            <h2>Logan Scott</h2>
                            <p></p>
                        </li>
                        <li>
                            <img className="member-photo" alt=""></img>
                            <h2>Fiona Ochs</h2>
                            <p></p>
                        </li>
                        <li>
                            <img className="member-photo" alt=""></img>
                            <h2>Owen Prendergast</h2>
                            <p></p>
                        </li>
                        <li>
                            <img className="member-photo" alt=""></img>
                            <h2>James Eserjose</h2>
                            <p></p>
                        </li>
                    </ul>
                    <Link to="/concerts">Back to concerts</Link>

                </div>
            </div>
        )
    }
}
