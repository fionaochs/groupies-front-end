import React, { Component } from 'react'
import { getConcerts } from './api'
import ConcertData from './ConcertData';


export default class Detail extends Component {
    state = { concert: {} }
    async componentDidMount() {
        const concerts = await getConcerts(this.props.match.params.id);
        if (concerts.name)
        {this.setState({ concert: concerts.events[0] })}
    }
    render() {
        const { concert } = this.state;
        return (
            <ConcertData concert={concert} />
        );
    }
}