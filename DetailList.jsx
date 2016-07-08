import React from 'react';
import Element from './DetailElement.jsx';
const DetailList = React.createClass({
	
	componentWillReceiveProps(next){
		console.log("DetailList:[componentWillReceiveProps] Next props ==>", next)
	},

	render: function(){
		var Elements = this.props.objectList.map(
			function( item, index ){
				return (<Element data={item} key={index} keyID={index} removeFromElement={this.props.removeItem} updateFromElement={this.props.updateItem}/>);
			},this);	
  return(
    <div className="elementList">
    	{Elements}
		</div>
		);
  }
});

export default DetailList;