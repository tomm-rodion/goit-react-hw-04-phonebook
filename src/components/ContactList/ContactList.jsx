import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filterContacts, onDelete }) => {
  const resultFilter = filterContacts();
  console.log(resultFilter);
  return (
    <ul>
      {resultFilter.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  filterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
