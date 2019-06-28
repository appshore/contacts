import React from 'react';
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import ContactDelete from './ContactDelete';
import ContactEdit from './ContactEdit';
import { ContactInterface } from './Contact.d';

const ContactLine = ({ name, email, id }: ContactInterface) => {
  return (
    <ListItem >
      <Link to={`/contact/${id}`}>
        <ListItemText id={id} primary={`${name} (${email})`} />
      </Link>
      <ListItemSecondaryAction>
        <ContactEdit id={id} />
        <ContactDelete id={id} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ContactLine;
