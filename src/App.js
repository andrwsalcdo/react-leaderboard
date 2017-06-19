import React, { Component } from 'react';
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeaderboardContainer from './components/Containers/LeaderboardContainer';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <LeaderboardContainer />
          <Footer /> 
      </div>
    );
  }
}

export default App;
