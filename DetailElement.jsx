import React from 'react';

const Element = React.createClass({ 
  edit () { 
    this.props.updateFromElement ( this.props.data );
  },
  remove () { 
    this.props.removeFromElement ( this.props.keyID );
  },
  render () { 
    return(
        <table className = "elementBox">
          <tbody>
            <tr className = "elementHead"> 
              <th colSpan = "2">Name : { this.props.data.name }</th> 
            </tr>
            <tr>
              <td>
                <table >
                  <tbody>
                    <tr> 
                      <td> { this.props.data.mail } </td>
                    </tr>
                    <tr>  
                      <td> { this.props.data.college } </td> 
                    </tr>
                    <tr>  
                      <td> { this.props.data.mobile } </td>  
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>  <button onClick = { this.edit } > Edit </button>  </td>  
                    </tr>
                    <tr>  
                      <td>  <button onClick = { this.remove } > Remove </button>   </td>  
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
    );
  }
});
export default Element;
