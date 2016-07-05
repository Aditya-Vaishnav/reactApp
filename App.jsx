import React from 'react';
import Form from './form.jsx';
import Data from './detail.jsx';
import List from  './List.jsx';

const App = React.createClass({
	getInitialState: function(){
		return{
			 	name:"",
      	college:"",
      	mobile:"",
      	mail:""
    }
	},
	setProps: function(_name,_college,_mobile,_mail){
		this.setState({
				name: _name,
				college: _college,
				mobile: _mobile,
				mail: _mail
		})
	},

  render: function(){

console.log(this.state)

  return(
  	<div>
  	<Form getProp={this.setProps}/>
  	<Data sendState={this.state}/>
  	</div >
  	);
  }
});

export default App;
