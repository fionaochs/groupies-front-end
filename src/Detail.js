import React, { Component } from 'react'
import { getConcert } from './api'
import './detail.css';
import * as moment from 'moment';
import Share from './Share';
import { getSaved, addSaved, deleteSaved } from './api.js';

import Mapp from './Map.js'
import Header from './Header.js'
import { FaAutoprefixer } from 'react-icons/fa';
import Footer from './Footer.js'

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
                <div className='share-buttons'>
                    <Share id="share-buttons" concert={this.state.concert}/>
                </div>

            { this.state.concert.name &&
            <li className="detail-concert-list">

                    <h1 className="detail-h1" style={{}}>{this.state.concert.name}</h1>
                    <div id="detail-container">
                        <div id="detail-left">
                            <img src={this.state.concert.images[0].url} alt="" id="concert-images"/>
                        </div>
                        <div id="detail-right">
                            <a href={this.state.concert.url}><button className="detail-ticket-button">Tickets</button></a>
                            <button id="detail-save-button" onClick={e => this.handleSaved(null, e)}>Save</button>
                            <h3 className="detail-type">Date: {moment(this.state.concert.dates.start.localDate, 'YYYY-MM-DD').format('dddd, MMM Do, YYYY')}</h3>
                            <h3 className="location-detail">Location: {this.state.concert._embedded.venues[0].city.name}, {this.state.concert._embedded.venues[0].state.name}</h3>
                            <h3 className="detail-type">Venue: {this.state.concert._embedded.venues[0].name}</h3>


                            { this.state.concert._embedded &&
                            <Mapp
                            isMarkerShown
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDkXY-WjEgFiZ9rf4y32GmUpgSwUwNtMkE`} 
                            loadingElement={<div style={{ height: '50%' }} />}
                            containerElement={<div style={{ height: '40px', margin: '0 auto', textAlign: 'center'}} />}
                            mapElement={<div style={{width:'650px', height:'300px', textAlign: 'center', margin: '0 auto'}} />}
                            lng={Number(this.state.concert._embedded.venues[0].location.longitude)}
                            lat={Number(this.state.concert._embedded.venues[0].location.latitude)} />
                            }
                        </div>
                    </div>
            </li>
            
        }
        <Footer />
        </div>
        );
    }
}

