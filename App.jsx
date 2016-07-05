import React from 'react';
import Form from './form.jsx';
import Data from './deatail.jsx';

const App = React.createClass({
	getInitialState: function(){
		return{
			 	name:"",
      	college:"",
      	mobile:"",
      	mail:""
    }
	},
	setProps: function(n,c,mob,mail){
		this.setState({
				name: n,
				college: c,
				mobile: mob,
				mail: mail
		})
	},

  render: function(){
  return(
  	<div>
  	<Form getProp={this.setProps.bind(this)}/>
  	<Data 
  		nameProp={this.state.name}
			collegeProp={this.state.college}
			mobileProp={this.state.mobile}
			mailProp={this.state.mail}
  	/>
  	</div>
  	);
  }
});

export default App;
