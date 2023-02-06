import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import propTypes from 'prop-types';
import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';

export const ContactsForm = ({ onSubmit, contacts }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
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
    onSubmit(newContact);
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().positive().required(),
  });

  const initialValues = { name: '', number: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormAddContact>
        <Label htmlFor="name">
          Name
          <InputField type="text" name="name" placeholder="First Name" />
        </Label>
        <Label htmlFor="number">
          Number
          <InputField type="text" name="number" placeholder="Number tel:" />
        </Label>
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </FormAddContact>
    </Formik>
  );
};

ContactsForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
