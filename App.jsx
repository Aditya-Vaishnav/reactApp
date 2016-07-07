import React from 'react';
import Form from './form.jsx';
import Data from './DetailElement.jsx';
import List from  './DetailList.jsx';

const App = React.createClass({
	getInitialState: function(){
		return{
      list: []
    }
  },
	setProps(objectValue){
		let tmpList = this.state.list
    tmpList.push(objectValue)
    this.setState({
		  list:tmpList
    });
	},
  remove(index){
    var newList = []
    this.state.list.map(function(item,i){
      i==index?'':newList.push(item)
    })
    this.setState({ list: newList });
  },

  render: function(){
  return(
  	<div>
  	<table>
     <tbody>
        <tr>
        <td className="tableBorder">
          <Form getProp={this.setProps}/>
       {/*   <Data sendState={this.state}/>
       */} </td>
        <td className="emptycol"></td>
        <td >
          <List objectList={this.state.list} removeItem={this.remove}/>
        </td>
        </tr>
        </tbody>
      </table>
  	</div>
  	);
  }
});

export default App;
