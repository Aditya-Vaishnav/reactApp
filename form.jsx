import React from 'react';

const Form = React.createClass({
 
  getInitialState(){ 
    if(!this.props.edit){
      return {
        id:0,
        name:"",
        college:"",
        mobile:"",
        mail:"",
      }
    }else{
        return{
          id:this.props.edit.id,
          name:this.props.edit.name,
          college:this.props.edit.college,
          mobile:this.props.edit.mobile,
          mail:this.props.edit.mail,
        }
      }
  },

  componentWillReceiveProps(next){
    console.log("Form:[componentWillReceiveProps] Next State ==> ",next)
    if(!next.edit){
      this.setState({
        id:this.state.id + 1
      })
    }else {
        this.setState({
          id:next.edit.id,
          name:next.edit.name,
          college:next.edit.college,
          mobile:next.edit.mobile,
          mail:next.edit.mail,
        })
    }   
  },
  sendData(){
      this.props.getProp(this.state)
      this.clearForm();
      console.log("Form:[sendData]  this.States ==> ",this.state);
  },
  testIt(){
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.state.name.length < 2 ? alert('error name') :(
      this.state.college.length < 2 ? alert('err0r college') :(
        isNaN(this.state.mobile) || this.state.mobile.length != 10 ? alert('Only 10 digits (0-9) are accepted'): (
          pattern1.test(this.state.mail) ? this.sendData() : alert('error mail')
        )
      ) 
    ) 
  },
  clearForm(){
    this.setState({
        id:"",
        name:"",
        college:"",
        mobile:"",
        mail:"",
    })
    console.log("Form:[ClearForm] this.state ==> ",this.state)
  },
	onChangeName (e){
    this.setState({
      name: e.target.value
    }) 
  },
  onChangeCollege (e){
    this.setState({
      college: e.target.value
    }) 
  },
  onChangeMobile (e){
    this.setState({
      mobile: e.target.value
    }) 
  },
  onChangeMail(e){
    this.setState({
      mail: e.target.value
    }) 
  },
  render(){
    const pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return(
  		<div >
        Name : <input type="text" className={this.state.name.length != 0 && this.state.name.length < 2 ?'input':''} value={this.state.name} placeholder="Enter name" onChange={this.onChangeName} /><br/>
        <p>{this.state.name.length != 0 && this.state.name.length < 2 ?"Error in name field":''}</p><br/>
  			College : <input type="text" className={this.state.college.length != 0 && this.state.college.length < 2 ?'input':''} value={this.state.college} placeholder="Enter College name" onChange={this.onChangeCollege}/><br/>
        <p>{this.state.college.length != 0 && this.state.college.length < 2 ?"Error in college field":''}</p><br/>
  			Mobile : <input type="text" className={isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0)?'input':''} placeholder="Enter Mobile no." value={this.state.mobile} onChange={this.onChangeMobile}/><br/>
        <p>{isNaN(this.state.mobile) || !(this.state.mobile.length == 10  || this.state.mobile.length == 0) ?"Only 10 digits (0-9) are accepted":""}</p><br/>
  			E-mail : <input type="text" className={pattern1.test(this.state.mail) || this.state.mail.length == 0 ? '' : 'input'} value={this.state.mail} placeholder="Enter email" onChange={this.onChangeMail}/><br/>
  			<p>{pattern1.test(this.state.mail) || this.state.mail.length == 0 ?"":"Error in E-mail field"}</p><br/>
        <button onClick={this.sendData}>Submit</button>
        </div>
  	);
  } 
});

export default Form;