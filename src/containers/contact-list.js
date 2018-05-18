import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


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
        <li key={index}>        
          <img src={contact.general.avatar} alt={contact.general.avatar} />
          <h3>{contact.general.firstName} {contact.general.lastName}</h3>
          <p>{contact.job.company},<br /> {contact.job.title}</p>
        </li>
       );
    });
	}
	
	searchClient(event){
    const value = event.target.value.toLowerCase();
    const display = this.props.contacts.filter(function(el){
      const searchValue = JSON.stringify(el).toLocaleLowerCase();
      return searchValue.indexOf(value.toLowerCase()) !==-1;
    });    
    this.setState({
      displayed: display
    })
  }  
  
	render(){
    console.log( this);
		return(      
      <div className="sidebar" >        
        <input id="search" type="search" placeholder="search" onKeyUp={this.searchClient.bind(this)}/>
        <ul className="list">
          {this.showList()}
        </ul>
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