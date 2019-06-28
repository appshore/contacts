import React from 'react';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ContactList from './ContactList';

const Contacts = () => {
  return (
    <Container maxWidth="lg">
      <Box my={6}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacts
        </Typography>
        <Button variant="contained"><Link to="/contact">New contact</Link></Button>
        <ContactList />
      </Box>
    </Container>
  );
}

export default Contacts;
