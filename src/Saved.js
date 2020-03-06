import React, { Component } from 'react'
import request from 'superagent'
import { getSaved, addSaved, deleteSaved } from './api.js'
import SavedItem from './SavedItem'
import Footer from './Footer'

export default class Saved extends Component {
    state = {
        saved: []
    }
    
    async componentDidMount() {

        const data = await getSaved();

        this.setState({
            saved: data.body
        });

    }
    handleFavorite = async () => {
        this.setState({saved: this.state.saved })
    }
    render() {
        return (
            <div> {
                this.state.saved.map(concert => <SavedItem concert={ concert } key={ concert.id } />)}
        
            </div>
                )
        }
}