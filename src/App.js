import React,{ Component } from 'react';
import Featured from './components/featured/index';
import Header from './components/header_footer/header'
import VenueNFO from './components/venueNFO/VenueNFO';
import './resources/styles.css'

class App extends Component {
  render(){
    return (
      <div className="App" style={{"height":"1500px"}}>
        <header className="App-header">
          <Header/>
          <Featured/>
          <VenueNFO/>
        </header>
      </div>
    );
  }
  
}

export default App;
