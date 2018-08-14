import React, { Component } from 'react';
import Signup from '../auth/Signup';
import Login from '../auth/Login';

class LoginSignup extends Component {
    constructor() {
        super();
        this.state = {
        isUser: false
        }
    }

    changeUserStatus = () => {
        this.setState({isUser: !this.state.isUser})
    }

    authViewShow = () => {
        if (!this.state.isUser){
            return(
            <Login toggleForm={this.changeUserStatus}/>
            ) 
        } else {
            return (
            <Signup toggleForm={this.changeUserStatus}/>
            )
        }
    }

    render(){
        console.log('the login/signup render is firing');
        return(
            <div>
                {this.authViewShow()}
            </div>
        )
    }
}

export default LoginSignup;