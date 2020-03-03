import React, { Component } from 'react'
import request from 'superagent'
// import { Link } from 'react-router-dom'

export default class LogIn extends Component {

    state = {
        usernameSignIn: '',
        passwordSignIn: '',
        
        
    }

    handleSignIn = async () => {
        
        const signIn = await request.post(`https://vast-ravine-67223.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        })

        alert('you are now logged in');
        localStorage.setItem('user', JSON.stringify(signIn.body));
        this.props.history.push('/');
    }

  
    render() {
        return (    
            <div>
              
                {/* <Link /> */}

                <input value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} />
                <input value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />

                <button onClick={this.handleSignIn}>Sign in</button>       
                </div>
        )
    }
}