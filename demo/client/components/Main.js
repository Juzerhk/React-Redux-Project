import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

  componentWillMount() {
    this.props.getAllCakes();

  },
  render() {

    const {cakes} = this.props;
    if(cakes === null ){
      this.props.getAllCakes();
  }
    return (
      <div>
        <h1>
          <Link to="/">It's all about Cakes !!</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
