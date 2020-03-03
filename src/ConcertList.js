import React, { Component } from 'react';
import ConcertData from "./ConcertData.js";
import request from 'superagent';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import { getConcerts } from './api.js';

export default class ConcertList extends Component {
    state = {
        searchQuery: this.props.match.params.name,
        concerts: [],
    }
    async componentDidMount() {
            const data = await getConcerts();
            console.log('data', JSON.parse(data.text)._embedded.events);
            this.setState({ concerts: JSON.parse(data.text)._embedded.events })
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://vast-ravine-67223.herokuapp.com/${this.state.searchQuery}`)
        this.setState({
            concerts: data.body.results,
        })
        this.props.history.push(this.state.searchQuery)
    }
    handleChange = (e) => this.setState({ searchQuery: e.target.value })
    render() {
        console.log(this.state.concerts.length)
        return (
            <div>
                <header>
                    <SearchBar
                    searchQuery={this.state.searchQuery}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    />
                </header>
                { this.state.concerts.length &&
                <ul>
                    {
                        this.state.concerts.map(concert => <Link to={`concert/${concert.name}`} key={concert.name}><ConcertData concert={concert} />
                        </Link>)
                    }
                </ul>
                }
            </div>
        )
}};