import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ContactList from './ContactList';
import ContactNew from './ContactNew';

const Contacts = () => {
  return (
    <Container maxWidth="lg">
      <Box my={6}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacts
        </Typography>
        <ContactNew />
        <ContactList />
      </Box>
    </Container>
  );
}

export default Contacts;
