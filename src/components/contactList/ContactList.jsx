import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const searchContact = contacts.filter(item =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul>
      {searchContact.map(item => (
        <Contact key={item.id} searchContact={item} />
      ))}
    </ul>
  );
};

export default ContactList;