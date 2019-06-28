import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Mutation, Query } from 'react-apollo';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import { GET_CONTACT, UPDATE_CONTACT } from './Contact';

const ContactEdit = ({ match: { params: { id } } }: any) => {
  const [contact, setContact] = useState({
    id: '',
    name: '',  
    email: ''
  });

  return (
    <Query query={GET_CONTACT} variables={{ id }}>
      {(result: any) => {
        const { data, loading, error } = result;

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
        if (!data || !data.contact) {
          return (
            <p>Unknown contact</p>
          );
        };

        if( data && data.contact && contact.id === '') {
          const { email, name, id } = data.contact;
          setContact({ email, name, id });
        }

        return (
          <Mutation 
            mutation={UPDATE_CONTACT}
          >
            {(updateContact: any, result: any) => {
              const { loading, error } = result;

              if (loading) {
                return (
                  <p>Loading...</p>
                );
              };
              
              if (error) {
                console.log('error', result);

                return (
                  <p>{`Error - ${error}`}</p>
                );
              };

              return (
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Edit contact
                    </Typography>
                    <div>
                      <Input
                        name="name"
                        value={contact.name}
                        placeholder="Name"
                        onChange={e => setContact({ ...contact, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        value={contact.email}
                        placeholder="Email"
                        onChange={e => setContact({ ...contact, email: e.target.value })}
                      />
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to="/">Cancel</Link></Button>
                    <Button size="small" onClick={e => {
                      try {
                        updateContact({
                          variables: {
                            contact
                          }
                        });
                        setContact({ ...contact });
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
      }}
    </Query>
  )
};

export default ContactEdit;
