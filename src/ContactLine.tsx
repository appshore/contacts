import React from 'react';
import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';

import ContactDelete from './ContactDelete';
import { ContactInterface } from './Contact.d';

const ContactLine = ({ name, email, id }: ContactInterface) => {
  return (
    <ListItem >
      <Link to={`/contact/${id}`}>
        <ListItemText id={id} primary={`${name} (${email})`} />
      </Link>
      <ListItemSecondaryAction>
        <Link to={`/contact/${id}/edit`}><IconButton edge="end"><EditIcon /></IconButton></Link>
        <ContactDelete id={id} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ContactLine;
