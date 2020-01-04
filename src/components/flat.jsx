import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.imageUrl})`,
      linearGradient: "(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))",
    };
    return (
      <div className="card" style={ style }>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}
export default Flat;
