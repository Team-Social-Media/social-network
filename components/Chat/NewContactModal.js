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
  const nameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault()

    createContact(usernameRef.current.value, nameRef.current.value)
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
        title='Create Contact'
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <label>Username/Email:</label>
          <input type="text" ref={usernameRef} id="username" name="username" required/>
          <label>Name:</label>
          <input type="text" ref={nameRef} id="name" name="name" required/>
          <button type="submit">Create</button>
        </form>
      </CardContent>
    </Card>
  );
}

export default NewContactModal;
