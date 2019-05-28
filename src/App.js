import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
