import React from 'react';
import Rating from 'react-rating';

const Single = React.createClass({
  render() {

    const { cakeId } = this.props.params;
    const { cakes } = this.props;
    const cake = cakes.find((cake) => cake.id === cakeId);

    return (
      <div className="grid-figure ">
        <img style={{width: '80%'}} src={cake.imageUrl} alt={cake.name} />
          <div>
            <h2>Name : {cake.name}</h2>   
            <h2>Comment: {cake.comment}</h2>
            <h2> Yum Rating :</h2>        
              <Rating initialRating={cake.yumFactor} readonly />
        </div> 
      </div>

    )
  }
});

export default Single;
