import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios from 'axios';
import SingleContact from './SingleContact';


class Main extends Component {
  constructor () {
    super();
    this.state = {
      contacts:[],
      selectedContact: {
      },
    }
    this.selectContact = this.selectContact.bind(this);
  }

  async componentDidMount () {
    try{
   let response = await axios.get('/api/contacts')
    let contacts = response.data;
    this.setState({contacts})
  }
  catch(err){console.log(err)}
}
 async selectContact (id) {
   let response = await axios.get(`/api/contacts/${id}`)
   console.log(response);
    let selectedContact = response.data;
    this.setState({selectedContact});
  }

  render()
  {
    let button;
    console.log(this.state.selectedContact);
    if(this.state.selectedContact.id){
      button = <SingleContact selectContact = {this.state.selectedContact}/>
    }
    else {button =  <ContactList contacts = {this.state.contacts} selectContact = {this.selectContact}/>}
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container" >
          {button}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
