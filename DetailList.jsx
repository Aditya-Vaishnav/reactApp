import React from 'react';
import Element from './DetailElement.jsx';
const DetailList = React.createClass({

	removeIt(index){
		this.props.removeItem(index);
	},
	render: function(){
		// 			console.log('inside DetailList')
		// console.log(this.props.objectList)
		
		var Elements = this.props.objectList.map(
			function( item, index ){
				return (
					<Element data={item} key={index} keyID={index} removeFromElement={this.removeIt}/>
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