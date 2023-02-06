import PropTypes from 'prop-types';
import { FilterInput, LabelSearchContact } from './CotactsFilter.styled';

export const ContactsFilter = ({ filter, onFilter }) => {
  return (
    <>
      <LabelSearchContact htmlFor="filter">
        Search contact by name
      </LabelSearchContact>
      <FilterInput
        type="text"
        placeholder="Name"
        autoComplete="off"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
