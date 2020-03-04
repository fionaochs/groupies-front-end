import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <input
                    placeholder="search"
                    value={this.props.searchQuery}
                    onChange={this.props.handleChange}/>
                    <input
                    placeholder="city"
                    value={this.props.searchCity}
                    onChange={this.props.handleCity}/>
                    <button>Search</button>
                    
                </form>
            </div>
        )
    }
}