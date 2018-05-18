import React from 'react';
import {Form, Button} from 'semantic-ui-react';


export class AddContact extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    e.preventDefault();
    const form=document.getElementById('form'),
          firstName=form.firstName,
          secondName=form.secondName,
          email=form.email,
          btn=form.btn,
          phone=form.phone;

    console.log(btn.className)

    firstName.style.borderColor='green';
    secondName.style.borderColor='green';
    email.style.borderColor='green';
    phone.style.borderColor='green';        

    if(/[^a-z]/gi.test(firstName.value) || firstName.value.length===0) firstName.style.borderColor='red'
    else if(/[^a-z]/gi.test(secondName.value) || secondName.value.length===0) secondName.style.borderColor='red'
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value)) email.style.borderColor='red'
    else if(!/^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value)) phone.style.borderColor='red'
    else {      
      btn.removeAttribute('disabled');
      btn.className= btn.className.replace('disabled', '')
    }
  }
  render(){
    return(
      <Form id="form">
        <img alt="img"/>
        <Form.Input onChange={this.handleChange} label="First Name" name="firstName" placeholder="First Name" />
        <Form.Input onChange={this.handleChange} label="Second Name" name="secondName" placeholder="Second Name" />
        <Form.Input onChange={this.handleChange} label="Email" name="email" placeholder="email@mail.com" />
        <Form.Input onChange={this.handleChange} label="Phone" name="phone" placeholder="+000(00)000-00-00" />
        <Button type="submit" name="btn" disabled onClick={this.handleChange} >Add Contact</Button>
      </Form>
    )
  }
}