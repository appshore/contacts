import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GET_CONTACT } from './Contact';

const ContactView = ({ match: { params: { id } } }: any) => {
  return (
    <Query query={GET_CONTACT} variables={{ id }}>
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
        if (!data || !data.contact) {
          return (
            <p>Unknown contact</p>
          );
        };

        const { name, email } = data.contact;

        return (
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography color="textSecondary">
                {email}
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to="/">Back to the list</Link></Button>
            </CardActions>
          </Card>
        );
      }}
    </Query>
  );
}

export default ContactView;
