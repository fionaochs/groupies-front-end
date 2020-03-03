import React, { Component } from 'react'
import { getConcerts } from './api'
import ConcertData from './ConcertData';
export default class Detail extends Component {
    state = { concert: {} }
    async componentDidMount() {
        const data = await getConcerts(this.props.match.params.concertId);
        if (data.body.results)
        {this.setState({ concert: data.body.results[0] })}
    }
    render() {
        const { concert } = this.state;
        return (
            <ConcertData data={concert} />
        );
    }
}