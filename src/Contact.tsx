import gql from 'graphql-tag';

const DELETE_CONTACT = gql`
  mutation contactDelete( $id: ID!) {
    deleteContact( id: $id)
  }
`;

const GET_CONTACT = gql`
  query contactGet( $id: ID!) {
    contact( id: $id) {
      name
      email
      id
    }
  }
`;

const GET_CONTACTS = gql`
  query contactsList {
    contacts {
      name
      email
      id
    }
  }
`;

const SAVE_CONTACT = gql`
  mutation contactSave( $contact: InputContact) {
    addContact( contact: $contact) {
      id
    }
  }
`;

const UPDATE_CONTACT = gql`
  mutation contactUpdate( $contact: InputContact) {
    updateContact( contact: $contact) {
      name
      email
      id
    }
  }
`;

export {
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  SAVE_CONTACT,
  UPDATE_CONTACT
}