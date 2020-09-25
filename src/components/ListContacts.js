import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


class ListContacts extends Component{

    constructor(props) {
        super(props);
        this.state={
            query:''
        }

        this.updateQuery = this.updateQuery.bind(this)
        this.clearQuery = this.clearQuery.bind(this);
    }


    static propTypes={
        contacts:propTypes.array.isRequired,
        onDeleteContact:propTypes.func.isRequired
    }

    updateQuery = (query)=>{
        this.setState(()=>{
            return {query: query.trim()}
        })
    }

    clearQuery(){
        this.updateQuery('');
    }

    render(){
        let {contacts,onDeleteContact} = this.props;
        let {query} =  this.state;

        let showingContacts = query === ''
            ? contacts
            : contacts.filter((contact)=>{
                return contact.name.toLowerCase().includes(query.toLowerCase())
            })

        return (
            <div className="list-contacts">
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event)=>{
                            this.updateQuery(event.target.value)
                        }}
                    />
                    <Link
                        className='add-contact'
                        to='/create'
                    >
                        Add Contact
                    </Link>
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show all</button>

                    </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map((contact)=>{
                        return <li key={contact.id} className="contact-list-item">
                            <div
                                className="contact-avatar"
                                style={{
                                    backgroundImage:`url(${contact.avatarURL})`
                                }}>

                            </div>
                            <div
                                className="contact-details"
                            >
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                className='contact-remove'
                                onClick={()=>{onDeleteContact(contact)}}
                            >
                                Remove
                            </button>
                        </li>
                    })}
                </ol>
            </div>

        )
    }
}




export default ListContacts;