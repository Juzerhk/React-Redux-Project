import React from 'react';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';
import Rating from 'react-rating';
import Comments from './Comments';


 const AddCakeDetails = React.createClass({
    render() {

        console.log('In AddDetails', this.props )        
        const { cake, cakeId, cakes } = this.props;    
        const i = this.props.cakes.map((cake) => cake.id === cakeId);
        const cakeComments = cake.comment;

        return(
            <div  className="grid-figure" >
                <img style={{width: '50%'}} src={cake.imageUrl} alt={cake.name}  />
                <div style={{width: '40%', float: 'right'}}>
                <Comments cakeComments={cakeComments} {...this.props} />
                </div>
            </div>

        );
    }
});
export default AddCakeDetails;