import React, { Component } from 'react'
import { getConcert } from './api'
import './detail.css';
// import ConcertData from './ConcertData';
import * as moment from 'moment';
import Share from './Share';

export default class Detail extends Component {
    state = { concert: {} }
    async componentDidMount() {

        const concerts = await getConcert(this.props.match.params.id);
        console.log(concerts.body);
        if (concerts.body)
        {this.setState({ concert: concerts.body })}
    }
    render() {
        console.log(this.state.concert.length)
        
        const { concert } = this.state;
        return (
            <div className="detail-box-container">
            <div className="detail-box">
            { this.state.concert.name &&

            <li className="detail-concert-list">
                <h1 className="detail-h1">{this.state.concert.name}</h1>
                <img src={this.state.concert.images[0].url} style={{width: "275px", height:"200px"}} alt="" id="concert-images"/>
                <h3 className="detail-type">Genre:</h3><p className="detail-text"> {this.state.concert.classifications[0].genre.name}</p>        
                <h3 className="detail-type">Date: {moment(this.state.concert.dates.start.localDate, 'YYYY-MM-DD').format('dddd, MMM Do, YYYY')}</h3>

                <h3>Tickets: {this.state.concert.url}</h3>

                <h3 className="detail-type">Location:</h3><p className="detail-text"> {this.state.concert._embedded.venues[0].city.name}, {this.state.concert._embedded.venues[0].state.name}</p>


                {/* <h3>Minimum Price: {this.state.concert.priceRanges[0].min}</h3> */}
                {/* <h3>Maximum Price: {this.state.concert.priceRanges[0].max}</h3> */}

                <h3 className="detail-type">Venue: </h3><p>{this.state.concert._embedded.venues[0].name}</p>

                <a href={this.state.concert.url}><button className="detail-ticket-button">Tickets</button></a>
                <Share concert={this.state.concert}/>

            </li>
    }
        </div>
        </div>  
        );
    }
}
