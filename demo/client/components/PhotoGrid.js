import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  displayPhotos() {
    if(this.props.cakes !== null) {
      return (this.props.cakes.map((cake, i) => <Photo {...this.props} key={i} i={i} cake={cake} />))
    }
  },

  render() {
    return (
      <div className="photo-grid">
        {this.displayPhotos()}
      </div>
    )
  }
});

export default PhotoGrid;
