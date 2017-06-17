import React, { Component } from 'react';
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Leaderboard from './components/Body/Leaderboard';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          {/*<Leaderboard />*/}
          <Footer /> 
      </div>
    );
  }
}

export default App;
