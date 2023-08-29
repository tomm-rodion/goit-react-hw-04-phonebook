import { Formik } from 'formik';
import * as yup from 'yup';
import propTypes from 'prop-types';
import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required(),
  number: yup
    .string()
    .min(2, <em>Too Short!</em>)
    .max(15, <em>Too Long!</em>)
    .matches(phoneRegExp, <em>Phone number is not valid</em>)
    .required(),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormAddContact>
          <Label htmlFor="name">
            Name
            {touched.name && errors.name && <div>{errors.name}</div>}
            <InputField type="text" name="name" placeholder="First Name" />
          </Label>
          <Label htmlFor="number">
            Number
            {touched.number && errors.number && <div>{errors.number}</div>}
            <InputField type="text" name="number" placeholder="Number tel:" />
          </Label>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormAddContact>
      )}
    </Formik>
  );
};

ContactsForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
