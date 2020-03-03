import React, { Component } from 'react'

export default class ConcertData extends Component {
    render() {
        console.log('props', this.props)
        return (
            <li> 
                {this.props.data.name}
            </li>
            
        )
    }
}
