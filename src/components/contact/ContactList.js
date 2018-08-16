import React from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class ContactList extends React.Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            const { contacts } = value;
            return (
              <div>
                {contacts.map((contact) => {
                  return (
                    <Contact
                      key={contact.id}
                      contact={contact}
                    />
                  )
                })}
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default ContactList;