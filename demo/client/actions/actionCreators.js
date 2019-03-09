import axios from 'axios';
import { func } from 'prop-types';

// add comment
export function addCakeData(id, data) {
  var config = {
    headers: {'content-Type': "application/json; charset=utf-8" }
  };

  return function(dispatch){
    axios.post(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes`, data, config )
    .then(response => {
      dispatch({
        type: 'INSERT_COMMENTS',
        data: response.data
      })
    })
  }
}

// get cake data

export function getAllCakes() {
  return function(dispatch) {
    axios.get(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes`)
    .then(response => {
      console.log('CAKE DATA', response)
      dispatch({
        type: 'GET_ALL_CAKES',
        data: response.data
      })        
    })
  }
}
