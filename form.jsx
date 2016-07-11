import React from 'react';

const Form = React.createClass ({
 
  getInitialState() { 
    if ( !this.props.edit ) {
      return {
        id : 0,
        name : "",
        college : "",
        mobile : "",
        mail : ""
      }
    } else {
        return {
          id : this.props.edit.id,
          name : this.props.edit.name,
          college : this.props.edit.college,
          mobile : this.props.edit.mobile,
          mail : this.props.edit.mail
        }
      }
  },

  componentWillReceiveProps ( next ) {
    if ( !next.edit ) {
      this.setState ({ id : this.state.id + 1 })
    } else {
        this.setState ({
          id : next.edit.id,
          name : next.edit.name,
          college : next.edit.college,
          mobile : next.edit.mobile,
          mail : next.edit.mail
        })
    }   
  },

  sendData () {
      this.props.getProp ( this.state )
      this.clearForm ()
  },

  testFormData () {
    const isNameNotValid = this.state.name.length < 2 
    const isCollegeNotValid = this.state.college.length < 2 
    const isMobileNotValid = this.state.mobile.length != 10 || isNaN ( this.state.mobile ) 
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmailNotValid =  !pattern1.test ( this.state.mail )
    
    if ( isNameNotValid )
      alert ( 'Error in Name' )
    else if ( isCollegeNotValid )
      alert ( 'Error in College name' )
    else if ( isMobileNotValid ) 
      alert ( 'Error in Mobile' )
    else if ( isEmailNotValid ) 
      alert ( 'Error in Email Address' )
    else 
      this.sendData ()
  },

  clearForm () {
    this.setState ({
        id : "",
        name : "",
        college : "",
        mobile : "",
        mail : "",
    })
  },
	
  onChangeName ( e ) {
    this.setState ({
      name : e.target.value
    }) 
  },
  
  onChangeCollege ( e ) {
    this.setState ({
      college : e.target.value
    }) 
  },
  
  onChangeMobile ( e ) {
    this.setState ({
      mobile : e.target.value
    }) 
  },
  
  onChangeMail ( e ) {
    this.setState ({
      mail : e.target.value
    }) 
  },
  
  render(){
    const isNameValid = this.state.name.length != 0 && this.state.name.length < 2
    const isCollegeValid = this.state.college.length != 0 && this.state.college.length < 2 
    const isMobileValid = isNaN ( this.state.mobile ) || ! ( this.state.mobile.length == 10  || this.state.mobile.length == 0 ) 
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmailValid =  pattern1.test(this.state.mail) || this.state.mail.length == 0 
    
    return(
  		<div >
        Name    : <input type="text" 
                         className = { isNameValid ? 'input' : '' } 
                         value = { this.state.name } 
                         placeholder = "Enter name" 
                         onChange = { this.onChangeName } 
                         />
                <br/>
                <p> { isNameValid ? "Error in name field" : '' } </p>
                <br/>

  			College : <input type = "text" 
                         className = { isCollegeValid ? 'input' : ''} 
                         value = { this.state.college } 
                         placeholder = "Enter College name" 
                         onChange = { this.onChangeCollege }
                         />
                  <br/>
                  <p> { isCollegeValid ? 'Error in college field' : '' } </p>
                  <br/>

  			Mobile :  <input type = "text" 
                         className = { isMobileValid ? 'input' : '' } 
                         placeholder = "Enter Mobile no." 
                         value = { this.state.mobile } 
                         onChange = { this.onChangeMobile }
                         />
                  <br/>
                  <p> { isMobileValid ? 'Only 10 digits (0-9) are accepted' : '' } </p>
                  <br/>

  			E-mail :  <input type = "text" 
                         className = { isEmailValid ? '' : 'input' } 
                         value = { this.state.mail }  
                         placeholder = "Enter email" 
                         onChange = { this.onChangeMail }
                         />
                  <br/>
  			          <p> { isEmailValid ? '' : 'Error in E-mail field' } </p>
                  <br/>
        
                  <button onClick = { this.testFormData }> Submit </button>
        </div>
  	);
  } 
});

export default Form;