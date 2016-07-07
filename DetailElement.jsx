import React from 'react';

const Element = React.createClass({
  getInitialState: function(){     
    return{
      id:this.props.keyID,
      }
  },
  edit(){
    console.log(this.state);
  },
  remove(){
    this.props.removeFromElement(this.state.id);
  },
  render: function(){

    console.log(">>>>>>>",this.props.data.name)
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
              <td>
                <table>
                  <tbody>
                    <tr>  <td>  <button onClick={this.edit}>Edit</button>  </td>  </tr>
                    <tr>  <td>  <button onClick={this.remove}>Remove</button>   </td>  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

export default Element;
