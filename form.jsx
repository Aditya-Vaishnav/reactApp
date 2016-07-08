import React from 'react';

const Form = React.createClass({
  getInitialState: function(){     
    if(!this.props.edit){
      return {
        id:"",
        name:"",
        college:"",
        mobile:"",
        mail:"",
        
      }
    } else {
        return {
          id:this.props.element.id,
          name:this.props.element.name,
          college:this.props.element.college,
          mobile:this.props.element.mobile,
          mail:this.props.element.mail,
          inEditMode:true
        }
      }
   },
  componentWillReceiveProps(next){
    console.log("Form:[componentWillReceiveProps] Next State ==> ",next)
    if(!next.edit){
    console.log("Form:[componentWillReceiveProps] Element ==> False")
    }else {
      console.log("Form:[componentWillReceiveProps] Checking element for values ==> ",next.element)
        this.setState({
          id:next.element.id,
          name:next.element.name,
          college:next.element.college,
          mobile:next.element.mobile,
          mail:next.element.mail,
          inEditMode:true
        },function(){
          this.forceUpdate();
        })
    }  
  },
  
  clearForm(){
    this.setState({
        id:"",
        name:"",
        college:"",
        mobile:"",
        mail:"",
        inEditMode:false
    },function(){
      console.log("Form:[clearForm] Form Cleared");
      this.forceUpdate();
      
    })
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
    console.log("Form:[Submit] this.state.inEditMode ==> ",this.state.inEditMode)
    if(this.state.inEditMode){
      this.setState({inEditMode: false},
        function(){
        console.log("Form:[Submit] After Set EditMode to false ==> ",this.state.inEditMode)
        this.props.saveEditedValues(this.state);
        this.clearForm();
        });
      }else{
      console.log("Form:[Submit] You are in SaveMode, EditMode ==> ",this.state.inEditMode)
      
      this.props.getProp(this.state)
      this.clearForm();
      console.log("Form:[Submit] outside States ==> ",this.state);
      
    }
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
  		<div >
        {this.state.inEditMode?<p>EditMode</p>:<p>SaveMode</p>}
  			Name : <input type="text" className={this.state.name.length != 0 && this.state.name.length < 2 ?'input':''} value={this.state.name} placeholder="Enter name" onChange={this.isVaildName} /><br/>
        <p>{this.state.name.length != 0 && this.state.name.length < 2 ?"Error in name field":''}</p><br/>
  			College : <input type="text" className={this.state.college.length != 0 && this.state.college.length < 2 ?'input':''} value={this.state.college} placeholder="Enter College name" onChange={this.isVaildCollege}/><br/>
        <p>{this.state.college.length != 0 && this.state.college.length < 2 ?"Error in college field":''}</p><br/>
  			Mobile : <input type="text" className={isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0)?'input':''} placeholder="Enter Mobile no." value={this.state.mobile} onChange={this.isVaildMobile}/><br/>
        <p>{isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0) ?"Only 10 digits (0-9) are accepted":""}</p><br/>
  			E-mail : <input type="text" className={pattern1.test(this.state.mail) || this.state.mail.length == 0 ? '' : 'input'} value={this.state.mail} placeholder="Enter email" onChange={this.isVaildMail}/><br/>
  			<p>{pattern1.test(this.state.mail) || this.state.mail.length == 0 ?"":"Error in E-mail field"}</p><br/>
        <button onClick={this.submit}>submit</button>
        </div>
  	);
  }
});

export default Form;