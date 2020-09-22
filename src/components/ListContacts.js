import React, {Component} from 'react';
import propTypes from 'prop-types';

class ListContacts extends Component{
    render(){
        let contacts = this.props.contacts

        return (
            <ol className='contact-list'>
                {contacts.map((contact)=>{
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
                            onClick={()=>{this.props.onDeleteContact(contact)}}
                        >
                            Remove
                        </button>
                    </li>
                })}
            </ol>
        )
    }
}


ListContacts.propTypes={
    contacts:propTypes.array.isRequired,
    onDeleteContact:propTypes.func.isRequired
}

export default ListContacts;