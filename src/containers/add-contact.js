import React from 'react';


export class AddContact extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    e.preventDefault();
    const form=document.getElementById('form'),
          name=form.firstName.value;
    if(!name.match(/[a-z]/gi)) alert('First name should contain only letters')
  }
  render(){
    return(
      <form id="form">
        <img alt="img"/>
        <input type="text" name="firstName" placeholder="firstName" />
        <input type="text" name="secondName" placeholder="secondName" />
        <input type="email" name="email" placeholder="email" />
        <input type="text" name="phone" placeholder="phone" />
        <button type="submit" name="btn"  onClick={this.handleChange} >Add Contact</button>
      </form>
    )
  }
}