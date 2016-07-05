import React from 'react';

const Form = React.createClass({

  getInitialState: function(){
    return{
      vaild_name:false,
      vaild_college:false,
      vaild_mobile:false,
      vaild_mail:false,
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
    e.target.value.length <= 2?this.setState({
      vaild_name: false
    }):this.setState({vaild_name: true})
  },
  isVaildCollege: function(e){
    this.setState({
      college: e.target.value
    })
    e.target.value.length <= 2?this.setState({
      vaild_college: false
    }):this.setState({vaild_college: true})
  },
  isVaildMobile: function(e){
    this.setState({
      mobile: e.target.value
    })
    e.target.value.length != 10 || isNaN(e.target.value) ?this.setState({
      vaild_mobile: false
    }) :this.setState({vaild_mobile: true})
  },
  isVaildMail:function(e){
    this.setState({
      mail: e.target.value
    })
    let pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    pattern1.test(e.target.value)?this.setState({vaild_mail:true}) 
    :this.setState({vaild_mail:false})
  },

  submit: function(){
    this.props.getProp(
      this.state.name,
      this.state.college,
      this.state.mobile,
      this.state.mail
      )
  },

	testIt:function(){
		this.state.vaild_name && this.state.vaild_mail && this.state.vaild_college && this.state.vaild_mobile ? 
    this.submit()
    :alert('check fields')
  },
  render: function(){
  	return(
  		<div id="form-div">
  			Name : <input type="text" className={this.state.vaild_name  || this.state.name.length == 0 ? '' : 'input'} onChange={this.isVaildName} /><br/>
        <p>{this.state.vaild_name || this.state.name.length == 0 ?"":"Error in name field"}</p><br/>
  			College : <input type="text" className={this.state.vaild_college || this.state.college.length == 0 ? '' : 'input'} onChange={this.isVaildCollege}/><br/>
        <p>{this.state.vaild_college || this.state.college.length == 0 ?"":"Error in College field"}</p><br/>
  			Mobile : <input type="text" className={this.state.vaild_mobile || this.state.mobile.length == 0 ? '' : 'input'} onChange={this.isVaildMobile}/><br/>
        <p>{this.state.vaild_mobile || this.state.mobile.length == 0 ?"":"Only 10 digits (0-9) are accepted"}</p><br/>
  			E-mail : <input type="text" className={this.state.vaild_mail || this.state.mail.length == 0 ? '' : 'input'} onChange={this.isVaildMail}/><br/>
  			<p>{this.state.vaild_mail || this.state.mail.length == 0 ?"":"Error in E-mail field"}</p><br/>
        <button onClick={this.testIt}>Submit</button>
  		</div>
  	);
  }
});

export default Form;
