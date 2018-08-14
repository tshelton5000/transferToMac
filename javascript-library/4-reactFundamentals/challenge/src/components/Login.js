import React from 'react';
import AuthForm from './AuthForm';

class Login extends React.Component{
    handleChange = (e) => {
        // console.log(e.target);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
            <AuthForm formName='Sign Up'changeInputs={this.handleChange}/>
            <h6>Register <button onClick={this.props.toggleForm}>HERE</button>if you don't have an account</h6>
            </div>
        )
    }
}

export default Login;