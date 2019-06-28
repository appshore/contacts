import React from 'react';
import { Query } from 'react-apollo';

import List from '@material-ui/core/List';

import { GET_CONTACTS } from './Contact';
import { ContactInterface } from './Contact.d';

import ContactLine from './ContactLine';

const ContactList = () => {
  return (
    <Query query={GET_CONTACTS}>
      {({ data, loading, error }: any) => {

        if (loading) {
          return (
            <p>Loading...</p>
          );
        };
        if (error) {
          return (
            <p>{`Error - ${error}`}</p>
          );
        };
        if (!data || !data.contacts) {
          return (
            <p>No contacts</p>
          );
        };

        return (
          <List>
            {
              data.contacts.map((contact: ContactInterface) =>
                <ContactLine key={contact.id} {...contact} />
              )
            }
          </List>
        );
      }}
    </Query>
  );
}

export default ContactList;
