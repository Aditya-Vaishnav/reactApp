import React from 'react';

const Data = React.createClass({
  render: function(){
  	return(
      <div>
    <h3>{this.props.nameProp}</h3>
    <h4>{this.props.collegeProp}</h4>
    <h4>{this.props.mobileProp}</h4>
    <h4>{this.props.mailProp}</h4>
    </div>
    );
  }
});

export default Data;