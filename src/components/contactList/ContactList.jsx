import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';

const ContactList = ({ onDeleteContact }) => {
 
  const contacts = useSelector(state => state.contacts);

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
