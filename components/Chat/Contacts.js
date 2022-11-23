import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { useContacts } from '../../context/ContactsProvider';
import ForumIcon from '@mui/icons-material/Forum';

const style = {
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'white',
  borderRadius: '20px',
  color: 'black',
};

function Contacts() {

  const { contacts } = useContacts()

  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {contacts.map(contact => (
          <div key={contact.username}>
            <ListItem key={contact.username}><ForumIcon sx={{ mr: 1 }}/> {contact.topic}
            </ListItem>
          </div>
        ))}
      </List>
    </>
  );
}

export default Contacts;
