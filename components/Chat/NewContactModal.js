import { useRef } from "react";
import { Card, IconButton, CardHeader, CardContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useContacts } from '../../context/ContactsProvider';

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

function NewContactModal({ closeModal }) {
  const usernameRef = useRef();
  const topicRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault()

    createContact(topicRef.current.value, topicRef.current.value)
    closeModal()
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
        title='Create Discussion Topic'
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <label>Topic:</label>
          <input type="text" ref={topicRef} id="topic" name="topic" required/>
          <button type="submit">Create</button>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewContactModal;
