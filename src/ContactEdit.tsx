import React from 'react';
import { Mutation } from 'react-apollo';

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import { UPDATE_CONTACT } from './Contact';
import { ContactInterface } from './Contact.d';

const ContactEdit = ({id}: any) => {
  return (
    <Mutation mutation={UPDATE_CONTACT} variables={{ id }}>
      {(saveContact: any, result: any) => {
        console.log(`edit contact id ${id}`);
        console.log(`edit contact result ${result}`);
        const { data, error } = result;
        return (
          <IconButton edge="end" onClick={() => saveContact(id)}>
            <EditIcon />
          </IconButton>
        );
      }}
    </Mutation>
  );}

export default ContactEdit;
