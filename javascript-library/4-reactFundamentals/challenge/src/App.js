import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
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
      return (
        <Login toggleForm = {this.changeUserStatus}/>
      )
    } else {
      return (
        <Signup toggleForm = {this.changeUserStatus}/>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.authViewShow()}
        <Footer/>
      </div>
    );
  }
}

export default App;
