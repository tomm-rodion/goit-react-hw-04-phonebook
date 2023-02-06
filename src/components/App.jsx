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
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);

  const [filter, setFilter] = useState('');

  const onformSubmit = ({ id, name, number }) => {
    setContacts(prevContacts => [{ id, name, number }, ...prevContacts]);
  };

  const onDelete = id => {
    const resultSortedContacts = contacts.filter(contact => contact.id !== id);
    console.log(resultSortedContacts);
    setContacts(prevContacts => {
      return [...resultSortedContacts];
    });
  };

  const onFilter = e => {
    console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  };

  const onFilterContacts = () => {
    let filterContact = [];
    if (filter) {
      filterContact = contacts.filter(
        contact =>
          contact.name.includes(filter) ||
          contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
    return filterContact;
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactsForm onSubmit={onformSubmit} contacts={contacts} />
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
