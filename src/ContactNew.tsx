import React from 'react';
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import { SAVE_CONTACT } from './Contact';

const ContactNew = ({ id }: any) => {
  return (
    <Mutation mutation={SAVE_CONTACT} variables={{ id }}>
      {(saveContact: any, result: any) => {
        const { error } = result;

        if (error) {
          return (
            <p>{`Error - ${error}`}</p>
          );
        };

        return (
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                New contact
              </Typography>
              <div>
                <Input
                  name="name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div>
                <Input
                  name="email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to="/">Cancel</Link></Button>
              <Button size="small" onClick={() => saveContact(id)}>Save</Button>
            </CardActions>
          </Card>
        );
      }}
    </Mutation>
  );
}

export default ContactNew;
