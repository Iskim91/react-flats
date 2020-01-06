import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import flats from '../data/flats';
import FlatList from './flat_list';
// import Map from './map';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNraW05MSIsImEiOiJjazR6cXoydW4wY3l1M2ZxdWRjNTQ3dHFwIn0.bJ1mThyvlomYLk6ehsJpig';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: null,
      lat: null,
      zoom: 5
    };
  }
  selectFlat = (coordinates) => {
    this.setState({
      lng: coordinates[0],
      lat: coordinates[1],
      zoom: 5
    });
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    // map.on('move', () => {
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   });
    // });
  }
  render() {
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <div className='sidebarStyle'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          </div>
          <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
      </div>
    );
  }
}


export default App;
