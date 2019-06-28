import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import { SAVE_CONTACT } from './Contact';

const ContactNew = () => {
  const [contact, setContact] = useState({
    name: '',
    email: ''
  });

  return (
    <Mutation mutation={SAVE_CONTACT}>
      {(addContact: any, result: any) => {
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
                  value={contact.name}
                  placeholder="Name"
                  required
                  onChange={e => setContact({ ...contact, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  name="email"
                  value={contact.email}
                  placeholder="Email"
                  required
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to="/">Cancel</Link></Button>
              <Button size="small" onClick={e => {
                try {
                  if( contact.name.length && contact.email.length ) {
                    addContact({
                      variables: {
                        contact
                      }
                    });
                  }
                } catch (error) {
                  return (
                    <p>{`Error adding contact- ${error}`}</p>
                  );
                }
              }}
              >
                <Link to="/">Save</Link>
              </Button>
            </CardActions>
          </Card>
        );
      }}
    </Mutation>
  );
}

export default ContactNew;
