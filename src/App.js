import React, { Component } from 'react';

import ListContacts from "./components/ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";


class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      contacts: []
    }


    this.removeContact = this.removeContact.bind(this)
  }

  componentDidMount(){
    ContactsAPI.getAll()
        .then((contacts)=>{
          this.setState(()=>{
            return {
              contacts
            }
          })
        })

  }

  removeContact = (contact)=>{

    this.setState((currentState)=>{
      return {contacts: currentState.contacts.filter((person)=>{return person.id !== contact.id})}
    })

    ContactsAPI.remove(contact)


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
