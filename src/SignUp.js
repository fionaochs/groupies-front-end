import React, { Component } from 'react'
import request from 'superagent'
import './SignUp.css'

export default class LogIn extends Component {

    state = {
        
        username: '',
        password: '',
        email: '',
        city: ''
            
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const signUp = await request.post(`https://vast-ravine-67223.herokuapp.com/api/auth/signup`, {

            display_name: this.state.username,
            email: this.state.email,
            password: this.state.password,
            location: this.state.city
        })
        
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/concerts');

    }

    render() {
        console.log(this.props, 'signup props');
        
        return (
            <div className="signup-container">
                <form className="signup-form">
                    <input type="text" value={ this.state.username} onChange={(e) => this.setState({ username: e.target.value})} placeholder="Username"/>
                    <br />
                    <input type="email" value={ this.state.email} onChange={(e) => this.setState({ email: e.target.value})} placeholder="Email"/>
                    <br />
                    <input type="password" value={ this.state.password} onChange={(e) => this.setState({ password: e.target.value})} placeholder="Password"/>
                    <br />
                    <input type="text" value={ this.state.city} onChange={(e) => this.setState({ city: e.target.value})} placeholder="City"/>
                    <br />
                    <button id="signup-button"onClick={ this.handleSignUp }>Sign up</button>  
                    <br />
                
                </form>
            </div>
        )
    }
}
