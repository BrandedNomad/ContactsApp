import React, { Component } from 'react';

import ListContacts from "./components/ListContacts";
import CreateContact from "./components/CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";
import { Route } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      contacts: [],
      screen: 'list'

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

  createContact = (contact)=>{
    ContactsAPI.create(contact)
        .then((contact)=>{
          this.setState((currentState)=>{
            return {contacts:currentState.contacts.concat([contact])}
          })
        })
  }



  render() {

    return (
      <div>
        <Route
            exact path='/'
            render={()=>{
              return  (
                  <ListContacts
                      contacts={this.state.contacts}
                      onDeleteContact={this.removeContact}
                  />)
            }}
        />
        <Route
            path='/create'
            render={({history})=>{
              return  (
                  <CreateContact
                      onCreateContact={(contact)=>{
                        this.createContact(contact)
                        history.push('/')
                      }}
                  />)
            }}
        />
      </div>
    );
  }
}

export default App;
