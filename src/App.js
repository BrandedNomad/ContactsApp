import React, { Component } from 'react';

import ListContacts from "./components/ListContacts";


class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      contacts: [
        {
          "id": "karen",
          "name": "Karen Isgrigg",
          "handle": "@karen_isgrigg",
          "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
          "id": "richard",
          "name": "Richard Kalehoff",
          "handle": "@richardkalehoff",
          "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "handle": "@tylermcginnis",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
      ]
    }

    this.removeContact = this.removeContact.bind(this)
  }

  removeContact = (contact)=>{

    this.setState((currentState)=>{
      return {contacts: currentState.contacts.filter((person)=>{return person.id !== contact.id})}
    })


  }

  render() {

    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
