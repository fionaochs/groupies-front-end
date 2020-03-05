import React, { Component } from 'react'
import { getConcert } from './api'
import './detail.css';

import { getConcerts, getSaved, addSaved, deleteSaved } from './api.js';

// import ConcertData from './ConcertData';

// import ConcertData from './ConcertData';
import * as moment from 'moment';


const isLoggedIn = () => JSON.parse(localStorage.getItem('user')); 
export default class Detail extends Component {
    state = { concert: {} }
    async componentDidMount() {

        const concerts = await getConcert(this.props.match.params.id);
        console.log(concerts.body);
        if (concerts.body)
        {this.setState({ concert: concerts.body })}
    }
    handleSaved = async( saved_id=this.state.concert.id, e) => {
        const {concert}=this.state;
        if(!this.state.loadingFav){
            this.setState({loadingFav: true})
            const button = e.target;
            button.classList.add('lds-ellipsis');
            console.log(saved_id);
            try {
            const saved = {
                tm_id: concert.id,
                name: concert.name,
                images: concert.images[1].url,
                genre: concert.classifications[0].genre.name,
                start_date: concert.dates.start.localDate,
                tickets_url: concert.url,
                city: concert._embedded.venues[0].city.name,
                state: concert._embedded.venues[0].state.name,
                price_min: concert.priceRanges[0].min ? concert.priceRanges[0].min : null,
                price_max: concert.priceRanges[0].max ? concert.priceRanges[0].max : null,
                long: concert._embedded.venues[0].location.longitude ? concert._embedded.venues[0].location.longitude : null,
                lat: concert._embedded.venues[0].location.latitude ? concert._embedded.venues[0].location.latitude : null,
            }
            if (isLoggedIn()) {

                const savedConcert = await addSaved(saved)
                    

                console.log(savedConcert);
                const data = await getSaved(); if(data.body) {
                    this.setState({
                        saved: data.body,
                    })
                } else {
                    this.setState({ saved: [] })
                }
            }
        } catch {

        }
        button.classList.remove('lds-ellipsis');
        this.setState({loadingFav: false})
    }}
    render() {
        console.log(this.state.concert.length)
        
        const { concert } = this.state;
        return (
            <div className="detail-box-container">
            {/* <div className="detail-box"> */}
            { this.state.concert.name &&

            <li className="detail-concert-list">
                <div className="detail-page-save-button">
                <button onClick={e => this.handleSaved(null, e)}>save!</button>
                </div>
                <h1 className="detail-h1">{this.state.concert.name}</h1>
                <div className="flexparent-of-details">
                <div className="detail-page-image">
                <img src={this.state.concert.images[0].url} style={{width: "625px", height:"450px"}} alt="" id="concert-images"/>
                </div>
                <div className="detail-page-right-side">
                <h3 className="detail-type">Genre:</h3><p className="detail-text"> {this.state.concert.classifications[0].genre.name}</p>        
                <h3 className="detail-type">Date: {moment(this.state.concert.dates.start.localDate, 'YYYY-MM-DD').format('dddd, MMM Do, YYYY')}</h3>

                {/* <h3>Tickets: {this.state.concert.url}</h3> */}

                <h3 className="detail-type">Location:</h3><p className="detail-text"> {this.state.concert._embedded.venues[0].city.name}, {this.state.concert._embedded.venues[0].state.name}</p>


                {/* <h3>Minimum Price: {this.state.concert.priceRanges[0].min}</h3> */}
                {/* <h3>Maximum Price: {this.state.concert.priceRanges[0].max}</h3> */}

                <h3 className="detail-type">Venue: </h3><p>{this.state.concert._embedded.venues[0].name}</p>

                <a href={this.state.concert.url}><button className="detail-ticket-button">Tickets</button></a>
                </div>
                
                </div>
            </li>
            }
        {/* </div> */}
        </div>  
        );
    }
}
