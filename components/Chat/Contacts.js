import { useContacts } from '../../context/ContactsProvider';

function Contacts() {

  const { contacts } = useContacts()

  return (
    <>
    <ul>
      {contacts.map(contact => (
        <li key={contact.username}>{contact.name}</li>
      ))}
    </ul>
    </>
  );
}

export default Contacts;
