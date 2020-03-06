import React, { Component } from 'react'
import './Saved.css'

export default class SavedItem extends Component {
    render() {
        
        return (
            <div id="saved-list-container">
                <li className="saved-list">
                <h1>{this.props.concert.name}</h1>
                <img src={this.props.concert.images} style={{width: "125px", height:"100px"}} alt="" className="concert-images"/>

                <h3>Date: {this.props.concert.start_date}</h3>

                <h3>{this.props.concert.city}, {this.props.concert.state}</h3>

                </li>
            </div>
        )
    }
}
