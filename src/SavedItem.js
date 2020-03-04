import React, { Component } from 'react'

export default class SavedItem extends Component {
    render() {
        
        return (
            <li id="saved-list">
                <h1>{this.props.concert.name}</h1>
                <img src={this.props.concert.images} style={{width: "125px", height:"100px"}} alt="" id="concert-images"/>
                {/* <h3>Genre: {this.props.concert.classifications[0].genre.name}</h3> */}
                <h3>Date: {this.props.concert.start_date}</h3>
                {/* <h3>Tickets: {this.props.concert.url}</h3> */}
                <h3>{this.props.concert.city}, {this.props.concert.state}</h3>
                {/* <h3>State: {this.props.concert._embedded.venues[0].state.name}</h3> */}
                {/* <h3>Minimum Price: {this.props.concert.priceRanges[0].min}</h3> */}
                {/* <h3>Maximum Price: {this.props.concert.priceRanges[0].max}</h3> */}
                {/* <h3>Venue: {this.props.concert._embedded.venues[0].name}</h3> */}
            </li>
        )
    }
}
