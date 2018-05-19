import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {connect} from 'react-redux'


class AddContact extends React.Component{
  constructor(props){
    super(props);
        

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      displayed: this.props.contacts
    };   
  }

  handleSubmit(e){    
    console.log(this)
    e.preventDefault();
    const form=document.getElementById('form');
    const newItem={
      general:{
        firstName: form.firstName.value,
        lastName: form.secondName.value,
        avatar: form.img.src
      },
      job:{
        company: form.company.value
      },
      contact:{
        email: form.email.value,
        phone: form.phone.value
      }
    }
    const display=this.props.contacts.concat(newItem)
    console.log(newItem)
    this.setState({
      displayed: display
    })
  }

  handleChange(e){
    e.preventDefault();
    const form=document.getElementById('form'),
          firstName=form.firstName,
          secondName=form.secondName,
          company=form.company,
          email=form.email,
          btn=form.btn,
          phone=form.phone;

    console.log(btn.className)

    firstName.style.borderColor='green';
    secondName.style.borderColor='green';
    company.style.borderColor='green';
    email.style.borderColor='green';
    phone.style.borderColor='green';        

    if(/[^a-z]/gi.test(firstName.value) || firstName.value.length===0) firstName.style.borderColor='red'
    else if(/[^a-z]/gi.test(secondName.value) || secondName.value.length===0) secondName.style.borderColor='red'
    else if( company.value.length===0) company.style.borderColor='red'
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value)) email.style.borderColor='red'
    else if(!/^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value)) phone.style.borderColor='red'
    else {      
      btn.removeAttribute('disabled');
      btn.className= btn.className.replace('disabled', '')
    }
  }
  render(){
    return(
      <Form id="form" onSubmit={this.handleSubmit}>
        <img alt="img" name="img" src="https://api.adorable.io/avatars/285/abott@adorable.png"/>
        <Form.Input onChange={this.handleChange} label="First Name" name="firstName" placeholder="First Name" />
        <Form.Input onChange={this.handleChange} label="Second Name" name="secondName" placeholder="Second Name" />
        <Form.Input onChange={this.handleChange} label="Company" name="company" placeholder="Company" />
        <Form.Input onChange={this.handleChange} label="Email" name="email" placeholder="email@mail.com" />
        <Form.Input onChange={this.handleChange} label="Phone" name="phone" placeholder="+000(00)000-00-00" />
        <Button type="submit" name="btn" disabled onClick={this.handleSubmit} >Add Contact</Button>
      </Form>
    )
  }
};


function mapStateToProps(state){
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(AddContact)