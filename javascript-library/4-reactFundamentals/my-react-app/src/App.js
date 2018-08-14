import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';


class App extends Component {
  

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
        </Router>
        <Footer />        
      </div>
    );
  }
}

export default App;
