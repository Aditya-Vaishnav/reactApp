import React from 'react';
import Form from './form.jsx';
import List from './DetailList.jsx';

const App = React.createClass ({

  getInitialState () {
    return {
      list : [],
      elementToEdit : false
      }
    },
	addToList ( objectValue ) {
    let newList = []
    let edited = false
    this.state.list.map ( function ( item , i ) {
      if ( item.id == objectValue.id ) {
        newList.push ( objectValue )
        edited = true
      } else {
        newList.push ( item )
      }
    })
    
    if( !edited ) {
        newList.push ( objectValue )
    }

    this.setState ({
		  list : newList,
      elementToEdit : false
    }); 
  },

  removeFromList ( index ) {
    let newList = []
    this.state.list.map ( function ( item , i ) { 
      i == index ? '' : newList.push ( item )
    })
    this.setState ({ list: newList });  
  },
  
  setElementForEdit ( element ) {
    this.setState ({ elementToEdit : element });
  },
  
  render() {
    return (
    	<div >
    	  <table className = "elementBox">
          <tbody>
            <tr>
              <th>Form</th>
              <th></th>
              <th>Data list</th>
            </tr>
            <tr>
              <td className = "tableBorder" >
                <Form edit = { this.state.elementToEdit } getProp = { this.addToList } />
              </td>
              <td className = "emptycol" ></td>
              <td >
                <List objectList = { this.state.list } removeItem = { this.removeFromList }  updateItem = { this.setElementForEdit } />
              </td>
            </tr>
          </tbody>
        </table>
    	</div>
    );
  }
});

export default App;
