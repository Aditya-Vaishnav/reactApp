import React from 'react';

const Form = React.createClass({

  getInitialState: function(){     
    return{
      name:"",
      college:"",
      mobile:"",
      mail:""
      }
  },
	isVaildName: function(e){
    this.setState({
      name: e.target.value
    })
  },
  isVaildCollege: function(e){
    this.setState({
      college: e.target.value
    })
  },
  isVaildMobile: function(e){
    this.setState({
      mobile: e.target.value
    })
  },
  isVaildMail:function(e){
    this.setState({
      mail: e.target.value
    })
  },

  submit: function(){
    this.props.getProp(
        this.state.name,
        this.state.college,
        this.state.mobile,
        this.state.mail
      )
    //this.clear()
    },

	testIt:function(){
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.state.name.length < 2 ? alert('error name') :(
      this.state.college.length < 2 ? alert('err0r college') :(
        isNaN(this.state.mobile) || this.state.mobile.length != 10 ? alert('Only 10 digits (0-9) are accepted'): (
          pattern1.test(this.state.mail)? 
          this.submit()
          :alert('error mail')
        )
      ) 
    )
  },
  render: function(){
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return(
  		<form >
  			Name : <input type="text" className={this.state.name.length != 0 && this.state.name.length < 2 ?'input':''} onChange={this.isVaildName} /><br/>
        <p>{this.state.name.length != 0 && this.state.name.length < 2 ?"Error in name field":''}</p><br/>
  			College : <input type="text" className={this.state.college.length != 0 && this.state.college.length < 2 ?'input':''} onChange={this.isVaildCollege}/><br/>
        <p>{this.state.college.length != 0 && this.state.college.length < 2 ?"Error in college field":''}</p><br/>
  			Mobile : <input type="text" className={isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0)?'input':''} onChange={this.isVaildMobile}/><br/>
        <p>{isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0) ?"Only 10 digits (0-9) are accepted":""}</p><br/>
  			E-mail : <input type="text" className={pattern1.test(this.state.mail) || this.state.mail.length == 0 ? '' : 'input'} onChange={this.isVaildMail}/><br/>
  			<p>{pattern1.test(this.state.mail) || this.state.mail.length == 0 ?"":"Error in E-mail field"}</p><br/>
        <button onClick={this.testIt}>Submit</button>
  		</form>
  	);
  }
});

export default Form;