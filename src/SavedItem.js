import React, { Component } from 'react'

export default class SavedItem extends Component {
    render() {
        
        return (
            <li className="saved-list">
                <h1>{this.props.concert.name}</h1>
                <img src={this.props.concert.images} style={{width: "125px", height:"100px"}} alt="" className="concert-images"/>
                {/* <h3>Genre: {this.props.concert.classifications[0].genre.name}</h3> */}
                <h3>Date: {this.props.concert.start_date}</h3>
                {/* <h3>Tickets: {this.props.concert.url}</h3> */}
                <h3>{this.props.concert.city}, {this.props.concert.state}</h3>
                <h3>Venue: {this.props.concert._embedded.venues[0].name}</h3>
            </li>
        )
    }
}
