import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
import GoogleMapReact from 'google-map-react';
import flats from '../data/flats';
import FlatList from '../containers/flat_list';
import Marker from '../containers/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 48.885707,
        lng: 2.343543
      },
      zoom: 11
    };
  }

  selectFlat = (coordinates) => {
    this.setState({
      lng: coordinates[0],
      lat: coordinates[1],
    });
  }

  center() {
    return {
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    };
  }

  render() {

    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <div className="map-container">
          <p>lat: {this.state.lat} lng:{this.state.lng}</p>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <Marker lat={this.state.lat} lng={this.state.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default App;
