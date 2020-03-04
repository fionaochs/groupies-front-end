import React, { Component } from 'react';
import ConcertData from "./ConcertData.js";
import request from 'superagent';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import { getConcerts } from './api.js';

export default class ConcertList extends Component {
    state = {
        searchQuery: '',
        searchCity: '',
        concerts: [],
    }
    async componentDidMount() {
            const data = await getConcerts();
            console.log('data', JSON.parse(data.text)._embedded.events);
            this.setState({ concerts: JSON.parse(data.text)._embedded.events })
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
                        this.state.concerts.map(concert => <Link to={`concert/${concert.id}`} key={concert.id}><ConcertData concert={concert} />
                        </Link>)
                    }
                </ul>
                }
            </div>
        )
}};