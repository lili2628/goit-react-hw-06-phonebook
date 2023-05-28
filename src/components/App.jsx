import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import { Container, Title, SubTitle, ContactContainer } from './App.styled';

function App() { 

  const contacts = useSelector(state => state.contacts.contacts);
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactContainer>
          <SubTitle>Contacts ({contacts.length})</SubTitle>
          <Filter />
          <ContactList>
            <ContactItem />
          </ContactList>
        </ContactContainer>
      </Container>
    );
  }


export default memo(App);


