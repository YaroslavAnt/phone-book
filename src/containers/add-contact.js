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
          secondName=form.secondName.value,
          email=form.email.value,
          phone=form.phone.value;

    if(/[^a-z]/.test(firstName.value)) alert('First name should contain only letters')
    else if(!secondName.match(/[a-z]/gi)) alert('Second name should contain only letters')
    else if(!email.match(/[a-z]/gi)) alert('Email should contain only letters')
    else if(!phone.match(/[0-9]/gi)) alert('Phone should contain only letters')
  }
  render(){
    return(
      <Form id="form">
        <img alt="img"/>
        <Form.Input name="firstName" placeholder="firstName" />
        <Form.Input name="secondName" placeholder="secondName" />
        <Form.Input name="email" placeholder="email" />
        <Form.Input name="phone" placeholder="phone" />
        <Button type="submit" name="btn"  onClick={this.handleChange} >Add Contact</Button>
      </Form>
    )
  }
}