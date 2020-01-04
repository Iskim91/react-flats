import React, { Component } from 'react';
import Flat from './flat';


class FlatList extends Component {
  render() {
    // console.log(this.flats);
    return (
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          console.log(flat.name);
          return (
            <Flat
              key={flat.name}
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
              lat={flat.lat}
              lng={flat.lng}
            />
          );
        })}
      </div>
    );
  }
}


export default FlatList;
