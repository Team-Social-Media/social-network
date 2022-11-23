import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { useCallback, useState } from "react";
import { useConversations } from "../../context/ConversationsProvider";
import chatStyles from '../../styles/Chat.module.css';

function OpenConversation() {
  const [text, setText] = useState('');
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations();
  console.log('PPPPPPPPPPPPPPP', selectedConversation);

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(selectedConversation.recipients.map(recipient => recipient.username), text);
    setText('');
  }

  return (
    <Container sx={{ height: '65vh', top: '10vh', width: '50vw', left: '580px', pt: 2, mt: '50px', backgroundColor: '#F2F2F9', position: 'fixed', border: 1, color: 'black', boxShadow: '5px 5px 5px grey', borderRadius: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {selectedConversation.recipients[0].username} chat
      </Typography>
      <Box sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
        minHeight: '44vh',
        maxHeight: '44vh',
        overflowY: "auto",
        border: 1,
      }}>
        <Box>
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index;
            return (
              <p style={{ width: '100%' }} ref={lastMessage ? setRef : null} key={index} className={`${message.fromMe ? chatStyles['text-right'] : chatStyles['text-left']} my-1 d-flex flex-column ${message.fromMe ? 'align-self-end' : ''}`}>
                <span className={`${message.fromMe ? chatStyles['text-right-color'] : chatStyles['text-left-color']}`}>{message.text}</span>
                <br />
                <span className={chatStyles.sender}>{message.fromMe ? 'You' : message.senderName}</span>
              </p>
            )
          })}
        </Box>
      </Box>
      <form className="m-2" onSubmit={handleSubmit}>
        <label>
          <TextField
            id="outlined-textarea"
            placeholder="Compose message"
            multiline
            sx={{ width: '40vw' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          {/* <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ height: '75px', resize: 'none' }} required /> */}
        </label>
        <input type="submit" value="Submit" style={{ height: '55px', width: '80px', resize: 'none' }} />
      </form>
    </Container>
  );
}

export default OpenConversation;
