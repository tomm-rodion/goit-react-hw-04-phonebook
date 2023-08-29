import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/CotactsFilter';
import { ContactsForm } from './ContactsForm/ContactsForm';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';
import { useState, useEffect } from 'react';

const getInitialContacts = () => {
  const savedUpContacts = localStorage.getItem('contacts');
  if (savedUpContacts !== null) {
    const parsContacts = JSON.parse(savedUpContacts);
    return parsContacts;
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onformSubmit = ({ name, number }) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    //перевірка існуючого кантакта в телефоній книжці.
    if (nameInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    // створення нового контакта
    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const onDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactsForm onSubmit={onformSubmit} />
      </Container>
      <Container>
        <TitleContacts>Contacts</TitleContacts>
        <ContactsFilter onFilter={onFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={onDelete}
          filterContacts={onFilterContacts}
        />
      </Container>
    </Wrapper>
  );
};
