import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

export default class LogIn extends Component {

    state = {
        
        username: '',
        password: '',
        email: '',
        city: ''
            
    }

    handleSignUp = async () => {

        const signUp = await request.post(`https://vast-ravine-67223.herokuapp.com/api/auth/signup`, {

            display_name: this.state.username,
            email: this.state.email,
            password: this.state.password,
            location: this.state.city
        })
        alert('thanks for signing up!');
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                Name: <input value={ this.state.username} onChange={(e) => this.setState({ username: e.target.value})} />
                <br />
                Email: <input value={ this.state.email} onChange={(e) => this.setState({ email: e.target.value})} />
                <br />
            Password: <input value={ this.state.password} onChange={(e) => this.setState({ password: e.target.value})} />
                <br />
                City: <input value={ this.state.city} onChange={(e) => this.setState({ city: e.target.value})} />
                <br />
                <button onClick={ this.handleSignUp }>Sign up</button>  
                <br />
                <Link />
            </div>
        )
    }
}
