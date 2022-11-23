import { Card, IconButton, CardHeader, CardContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useContacts } from '../../context/ContactsProvider';
import { useState } from "react";
import { useConversations } from '../../context/ConversationsProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NewConversationModal({ closeModal }) {
  const [selectedContactUsernames, setSelectedContactUsernames] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault()
    createConversation(selectedContactUsernames)
    closeModal()
  }

  function handleCheckboxChange(contactUsername) {
    setSelectedContactUsernames(prevSelectedContactUsernames => {
      if (prevSelectedContactUsernames.includes(contactUsername)) {
        return prevSelectedContactUsernames.filter(prevUsername => {
          return contactUsername !== prevUsername
        })
      } else {
        return [...prevSelectedContactUsernames, contactUsername]
      }
    })
  }

  return (
    <Card sx={style} position='relative'>
      <CardHeader
        action={
          <>
            <IconButton aria-label="close" onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </>
        }
        title='Create Conversation'
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <label key={contact.username} >
              <input type="checkbox" key={contact.username} value={selectedContactUsernames.includes(contact.username)} onChange={() => handleCheckboxChange(contact.username)} />
              {contact.topic}
            </label>
          ))}
          <button type="submit">Create</button>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewConversationModal;
