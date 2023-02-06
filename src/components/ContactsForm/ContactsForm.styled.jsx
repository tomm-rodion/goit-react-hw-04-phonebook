import styled from '@emotion/styled';
import { btn } from 'components/Style/mixins';
import { Form, Field } from 'formik';

export const FormAddContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled(Field)`
  border: 0;
  outline: 1px solid #08215a;
  border-radius: 3px;
  min-width: 130px;
  height: 20px;
  margin: 8px;
  &:last-child {
    padding-left: 5px;
  }
`;

export const Label = styled.label`
  display: block;
  color: #f51616;
`;

export const ButtonAddContact = styled.button`
  ${btn}
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
`;
