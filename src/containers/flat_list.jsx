import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from './flat';
import setFlats from '../actions/index';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          // console.log(flat.name);
          return (
            <Flat
              key={flat.name}
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
              lat={flat.lat}
              lng={flat.lng}
              selectFlat={this.props.selectFlat}
            />
          );
        })}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}
export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
