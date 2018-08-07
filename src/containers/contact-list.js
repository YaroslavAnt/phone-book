import React from 'react';
import {connect} from 'react-redux';
import {List, Image, Input } from 'semantic-ui-react'


class ContactList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this)
    this.state = {
      displayed: this.props.contacts
    };
  }
    
  showList(){
    return this.state.displayed.map((contact, index)=>{
      return(
        <List.Item key={index}>        
          <Image avatar floated="left" src={contact.general.avatar} alt={contact.general.avatar} />
          <List.Content floated="left">
            <List.Header as="h3">{contact.general.firstName} {contact.general.lastName}</List.Header>
            {/* <p>{contact.job.company},<br /> {contact.job.title}</p> */}
          </List.Content>
        </List.Item>
       );
    });
	}
	
	searchContact(event){
    const value = event.target.value.toLowerCase();
    const display = this.props.contacts.filter(function(el){
      const searchValue = JSON.stringify(el).toLocaleLowerCase();
      return searchValue.indexOf(value.toLowerCase()) !==-1;
    });    
    console.log(display)
    this.setState({
      displayed: display
    })
  }  
  
	render(){
    console.log( this);
		return(      
      <div >        
        <Input icon="search" id="search" placeholder="search" onKeyUp={this.searchContact.bind(this)}/>
        <List selection verticalAlign="middle">
          {this.showList()}
        </List>
      </div>
    );
	}
};

function mapStateToProps(state){
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(ContactList)