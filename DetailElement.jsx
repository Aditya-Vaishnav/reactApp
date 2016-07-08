import React from 'react';

const Element = React.createClass({
    getInitialState: function(){
    return{
    isEditing: false,
    }
  },
  edit(){
    this.setState({
      isEditing: true
    });
    console.log('DetailElement:[Edit] After set isEditing to ture ==>',this.props.data);
    this.props.updateFromElement(this.props.data);
  },
  remove(){
    this.props.removeFromElement(this.props.keyID);
  },
  render: function(){
    return(
      <div className="elementBox" id={this.props.keyID}>
        <table>
          <tbody>
            <tr className="elementHead">  <th colSpan="2">Name : {this.props.data.name}</th> </tr>
            <tr>
              <td>
                <table >
                  <tbody>
                    <tr>  <td>{this.props.data.mail}</td>  </tr>
                    <tr>  <td>{this.props.data.college}</td> </tr>
                    <tr>  <td>{this.props.data.mobile}</td>  </tr>
                  </tbody>
                </table>
              </td>
              {this.state.isEditing?'':
              <td>
                <table>
                  <tbody>
                    <tr>  <td>  <button onClick={this.edit}>Edit</button>  </td>  </tr>
                    <tr>  <td>  <button onClick={this.remove}>Remove</button>   </td>  </tr>
                  </tbody>
                </table>
              </td>
            }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});
export default Element;
