import React from 'react';

const Data = React.createClass({
  render: function(){
  	return(
      <div>
    <h3>{this.props.sendState.name}</h3>
    <h4>{this.props.sendState.college}</h4>
    <h4>{this.props.sendState.mobile}</h4>
    <h4>{this.props.sendState.mail}</h4>
    </div>
    );
  }
});

export default Data;
