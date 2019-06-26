import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import SaveIcon from '@material-ui/icons/Save';

import { SAVE_CONTACT } from './Contact';

const ContactSave = ({ id }: any) => {
  return (
    <Mutation mutation={SAVE_CONTACT} variables={{ id }}>
      {(saveContact: any, result: any) => {
        console.log('Save contact result', result);
        const { data, error } = result;

        if (error) {
          return (
            <p>{`Error - ${error}`}</p>
          );
        };
        if (data && data.saveContact) {
          return (
            <p>{'Contact deleted!'}</p>
          );
        };

        return (
          <Fragment>
            <Input
              defaultValue=""
              placeholder="Name"
            />
            <Input
              defaultValue=""
              placeholder="Email"
            />
            <IconButton edge="end" onClick={() => saveContact(id)}>
              <SaveIcon />
            </IconButton>
          </Fragment>
        );
      }}
    </Mutation>
  );
}

const ContactNew = () => {
  return (
    <Button variant="contained" onClick={() => <ContactSave />}>
      New contact
    </Button>
  );
}

export default ContactNew;
