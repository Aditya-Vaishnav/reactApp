import React from 'react';
import Element from './DetailElement.jsx';
const DetailList = React.createClass({

	updateIt(elementToEdit){
		console.log("DetailList:[updateIt] Received Object ==> ",elementToEdit);
		this.props.updateItem(elementToEdit);
	},
	render: function(){
		// console.log('inside DetailList')
		// console.log(this.props.objectList)
		
		var Elements = this.props.objectList.map(
			function( item, index ){
				return (
					<Element data={item} key={index} keyID={index} removeFromElement={this.props.removeItem} updateFromElement={this.updateIt}/>
				);
			},this
		);	
  	return(
      <div className="elementList">
      	{Elements}
			</div>
    );
  }
});
export default DetailList;