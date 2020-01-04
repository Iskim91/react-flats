import React, { Component } from 'react';
import flats from '../data/flats';
import FlatList from './flat_list';


class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
