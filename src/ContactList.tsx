import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';

import ContactDelete from './ContactDelete';
import { GET_CONTACTS } from './Contact';
import { ContactInterface } from './Contact.d';

const ContactList = () => {
  return (
    <Query
      query={GET_CONTACTS}
      fetchPolicy="no-cache"
    >
      {(result: any) => {
        const { data, loading, error, refetch } = result;

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
              data.contacts.map(({ id, name, email }: ContactInterface) => {
                return (
                  <ListItem key={id}>
                    <Link to={`/contact/${id}`}>
                      <ListItemText id={id} primary={`${name} (${email})`} />
                    </Link>
                    <ListItemSecondaryAction>
                      <Link to={`/contact/${id}/edit`}>
                        <IconButton edge="end"><EditIcon /></IconButton>
                      </Link>
                      <ContactDelete id={id} refetch={refetch}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })
            }
          </List>
        );
      }}
    </Query>
  );
}

export default ContactList;
