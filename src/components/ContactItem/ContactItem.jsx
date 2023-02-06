import PropTypes from 'prop-types';
import { ItemContact, ButtonDeleteContact } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ItemContact>
      <span>
        {name} : {number}
      </span>
      <ButtonDeleteContact type="button" onClick={() => onDelete(id)}>
        Delete contact
      </ButtonDeleteContact>
    </ItemContact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
