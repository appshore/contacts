import React from 'react';
import { Redirect } from 'react-router-dom'
import { Mutation } from 'react-apollo';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { DELETE_CONTACT } from './Contact';

const ContactDelete = ({id, refetch}: any) => {
  return (
    <Mutation mutation={DELETE_CONTACT} variables={{ id }}>
      {(deleteContact: any, result: any) => {
        const { data, error } = result;

        if (error) {
          return (
            <p>{`Error - ${error}`}</p>
          );
        };
        if (data && data.deleteContact) {
          refetch();
          return (
            <Redirect to="/"/>
          );
        };

        return (
          <IconButton edge="end" onClick={() => deleteContact(id)}>
            <DeleteIcon />
          </IconButton>
        );
      }}
    </Mutation>
  );
}

export default ContactDelete;
