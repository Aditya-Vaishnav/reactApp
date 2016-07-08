import React from 'react';
import Form from './form.jsx';
import List from './DetailList.jsx';

const App = React.createClass({
	getInitialState: function(){
		return{
      list: [],
      isEditing: false,
      elementToEdit: ''
    }
  },
	setProps(objectValue){
    objectValue.id =this.state.list.length
    let tmpList = this.state.list
    tmpList.push(objectValue)
    this.setState({
		  list:tmpList
    });
	},
  remove(index){
    let newList = []
    this.state.list.map(function(item,i){
      i==index?'':newList.push(item)
    })
    this.setState({ list: newList });
  },
  setToEditingMode(element){
    console.log("App:[setToEditingMode] EditMode >>",element)
    this.setState({
      isEditing: true,  
      elementToEdit: element
    });
  },
  getEditedValues(editedData){
    console.log("App:[getEditedValues] Reveived Values ==> ",editedData);
    let newList = []
    this.state.list.map(function(item,i){
      i==editedData.id?newList.push(editedData) :newList.push(item) 
    })
    this.setState({ list : newList },
      function(){
        this.setState({ isEditing: false });
        }) 
  },
  render: function(){
  return(
  	<div>
  	  <table>
        <tbody>
          <tr>
            <td className="tableBorder">
            {console.log("APP: Before Rendering Form ==> isEditing :", this.state.isEditing)}
              <Form element={this.state.isEditing?this.state.elementToEdit:false}
                    getProp={this.setProps}
                    edit={this.state.isEditing}
                    saveEditedValues={this.getEditedValues}
                    />
            </td>
            <td className="emptycol"></td>
            <td >
              <List objectList={this.state.list} removeItem={this.remove} updateItem={this.setToEditingMode}/>
            </td>
          </tr>
        </tbody>
      </table>
  	</div>
  	);
  }
});

export default App;
