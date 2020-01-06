import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => {
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
            selectFlat={props.selectFlat}
          />
        );
      })}
    </div>
  );
};
export default FlatList;
