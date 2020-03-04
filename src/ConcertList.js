import React, { Component } from 'react';
import ConcertData from "./ConcertData.js";
import request from 'superagent';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import { getConcerts, getSaved, addSaved, deleteSaved } from './api.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class ConcertList extends Component {
    state = {
        searchQuery: '',
        searchCity: '',
        concerts: [],
        saved: []
    }
    async componentDidMount() {
            const data = await getConcerts();
            if(data.body._embedded) {
                this.setState({
                        concerts: JSON.parse(data.text)._embedded.events,
                    })
                } else {
                    this.setState({ concerts: [] })
                }
            if (isLoggedIn()) {
                const data = await getSaved();
            if(data.body) {
                this.setState({
                        saved: data.body,
                    })
                } else {
                    this.setState({ saved: [] })
                }
            }
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await getConcerts(this.state.searchQuery, this.state.searchCity);
        console.log(data);
        if(data.body._embedded) {
        this.setState({
                concerts: JSON.parse(data.text)._embedded.events,
            })
        } else {
            this.setState({ concerts: [] })
        }
        // this.props.history.push(this.state.searchQuery)
    }
    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    handleCity = (e) => this.setState({ searchCity: e.target.value })

    handleSaved = async(concert) => {
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
        const savedConcert = await addSaved(saved);
        console.log(savedConcert);
        const data = await getSaved(); if(data.body) {
            this.setState({
                    saved: data.body,
                })
            } else {
                this.setState({ saved: [] })
            }
        }
    }
    render() {
        console.log(this.state.concerts.length)
        return (
            <div>
                <header>
                    <SearchBar
                    searchQuery={this.state.searchQuery}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    handleCity={this.handleCity}
                    searchCity={this.state.searchCity}
                    />
                </header>
                { this.state.concerts.length &&
                <ul>
                    {
                        this.state.concerts.map(concert =>
                        <ConcertData handleSaved={ this.handleSaved } concert={concert} />
                        )
                    }
                </ul>
                }
            </div>
        )
}};