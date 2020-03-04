import React, { Component } from 'react'
import { getConcert } from './api'
// import ConcertData from './ConcertData';


export default class Detail extends Component {
    state = { concert: {} }
    async componentDidMount() {

        const concerts = await getConcert(this.props.match.params.id);
        console.log(concerts.body);
        if (concerts.body)
        {this.setState({ concert: concerts.body })}
    }
    render() {
        console.log('hello')
        console.log(this.state.concert.length)
        const { concert } = this.state;
        return (
            <div>
            { this.state.concert.name &&
            <li id="concert-list">
                <h1>{this.state.concert.name}</h1>
                <img src={this.state.concert.images[0].url} style={{width: "275px", height:"200px"}} alt="" id="concert-images"/>
                <h3>Genre: {this.state.concert.classifications[0].genre.name}</h3>
                <h3>Date: {this.state.concert.dates.start.localDate}</h3>
                <h3>Tickets: {this.state.concert.url}</h3>
                <h3>City: {this.state.concert._embedded.venues[0].city.name}</h3>
                <h3>State: {this.state.concert._embedded.venues[0].state.name}</h3>
                {/* <h3>Minimum Price: {this.state.concert.priceRanges[0].min}</h3> */}
                {/* <h3>Maximum Price: {this.state.concert.priceRanges[0].max}</h3> */}
                <h3>Venue: {this.state.concert._embedded.venues[0].name}</h3>
            </li>
    }
    </div>
            
        );
    }
}
