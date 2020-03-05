import React, { Component } from 'react'
import { getConcert } from './api'
import './detail.css';
import { getSaved, addSaved, deleteSaved } from './api.js';
import * as moment from 'moment';
import Mapp from './Map.js'

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
                genre: concert.genre && concert.classifications[0].genre.name,
                start_date: concert.dates.start.localDate,
                tickets_url: concert.url,
                city: concert._embedded.venues[0].city.name,
                state: concert._embedded.venues[0].state.name,
                price_min: concert.priceRanges && concert.priceRanges[0].min ? concert.priceRanges[0].min : null,
                price_max: concert.priceRanges && concert.priceRanges[0].max ? concert.priceRanges[0].max : null,
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
        
        const { concert } = this.state;
        return (
            <div className="detail-box-container">

            <div className="detail-box">
            { this.state.concert.name &&
            <li className="detail-concert-list">
                <div className="detail-page-save-button">
                    <button onClick={e => this.handleSaved(null, e)}>save!</button>
                </div>
                    <h1 className="detail-h1">{this.state.concert.name}</h1>

                <div className="flexparent-of-details">
                
                <div className="detail-page-image">
                    <img src={this.state.concert.images[0].url} style={{width: "625px", height:"450px", display:"flex", justifyContent:"flex-start"}} alt="" id="concert-images"/>
                </div>
                <div className="detail-page-right-side">
    
                    <h3 className="detail-type">Date: {moment(this.state.concert.dates.start.localDate, 'YYYY-MM-DD').format('dddd, MMM Do, YYYY')}</h3>

                    <h3 className="location-detail">Location: {this.state.concert._embedded.venues[0].city.name}, {this.state.concert._embedded.venues[0].state.name}</h3>

                    <h3 className="detail-type">Venue: {this.state.concert._embedded.venues[0].name}</h3>

                </div>

                <h3 className="detail-type">Venue: {this.state.concert._embedded.venues[0].name}</h3>

                <a href={this.state.concert.url}><button className="detail-ticket-button">Tickets</button></a>
                </div>
                
            <button onClick={e => this.handleSaved(null, e)}>save!</button>
            </li>
            }
        </div>

        { this.state.concert._embedded &&
        
        <Mapp
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDkXY-WjEgFiZ9rf4y32GmUpgSwUwNtMkE`} 
        loadingElement={<div style={{ height: '50%' }} />}
        containerElement={<div style={{ height: '40px' }} />}
        mapElement={<div style={{ height: '400px', width: '400px' }} />}
        lng={Number(this.state.concert._embedded.venues[0].location.longitude)}
        lat={Number(this.state.concert._embedded.venues[0].location.latitude)} />
        
        };
        </div>
        );
    }
}

