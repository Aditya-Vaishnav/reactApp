import React from 'react';
import Form from './form.jsx';
import List from './DetailList.jsx';

const App = React.createClass({

  getInitialState() {
    return{
      list: [],
      elementToEdit:false
      }
    },
	addToList(objectValue) {
    console.log("App :[addToList] objectValue ==> ", objectValue)
    console.log("App :[addToList] objectList ==> ", this.state.list)
    let newList = []
    let edited = false
    this.state.list.map(function(item,i) {
      if(item.id == objectValue.id) {
        newList.push(objectValue)
        edited = true
      } else {
        newList.push(item)
      }
    })
    
    if(!edited) {
        newList.push(objectValue)
      }

    this.setState({
		  list:newList,
      elementToEdit: false
    }); // take element, push to new list and update [this.state.list].
    console.log("App :[addToList] value of states ==> ",this.state)
  },

  remove(index) {
    let newList = []
    this.state.list.map(function(item,i) {
      i==index?'':newList.push(item)
    })
    this.setState({ list: newList });  // take index and remove it from the list.
  },
  setElementForEdit(element) {
    console.log("App:[setElementForEdit] EditMode >>",element)
    this.setState({
      elementToEdit: element
    });
  },
  
  render() {
    return (
    	<div>
    	  <table>
          <tbody>
            <tr>
              <td className="tableBorder">
                <Form edit= {this.state.elementToEdit} getProp={this.addToList}/>
              </td>
              <td className="emptycol"></td>
              <td >
                <List objectList={this.state.list} removeItem={this.remove} updateItem={this.setElementForEdit}/>
              </td>
            </tr>
          </tbody>
        </table>
    	</div>
    );
  }
});

export default App;
