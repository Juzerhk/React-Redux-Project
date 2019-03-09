import React from 'react';
import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-modal';
import AddCakeDetails from './AddCakeDetails';

const Photo = React.createClass({

  showModal: function() {
    this.setState({ show: true });
  },

  hideModal: function() {
    this.setState({ show: false });
  },

  getInitialState: function() {

    return {
      isMouseInside: false,
      show: false,
    };
  },
  mouseEnter: function(){
    this.setState({ isMouseInside: true });
  },
  mouseLeave: function(){
    this.setState({ isMouseInside: false });
  },
  disableScroll : function() {
    document.body.style.overflow = 'hidden' 
    document.body.style.position = 'fixed' 
  },

  enableScroll : function() {
    document.body.style.overflow = 'visible' 
    document.body.style.position = 'absolute' 
  },
  disableAddButtton : function() {
   return this.setState({ showAddButton: false});
  },

  render() {
    const { cake } = this.props;    
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <Link id={cake.id} to={`/view/${cake.id}`}>
            <img src={cake.imageUrl} alt={cake.name} className="grid-photo" />
            <p>{cake.name}</p>
          </Link>
          {this.state.isMouseInside ? 
          <button
            title='Add to my list'
            onClick={this.showModal}        
          >
          <FontAwesomeIcon icon={faPlus}/>Add</button>
          : null}
        </div>
        {this.state.show ?
          <form>
            <Modal 
              isOpen={this.state.show}
              onRequestClose={this.hideModal}
              ariaHideApp={false}
              onAfterOpen={this.disableScroll}
              onAfterClose={this.enableScroll}
            >
            <AddCakeDetails {...this.props} cakeId={cake.id}/>
            <button style={{ float: 'right'}} onClick={this.hideModal}>close</button>
            </Modal>
          </form>
         : null }
      </figure>
      
    )
  }
  
});

export default Photo;
