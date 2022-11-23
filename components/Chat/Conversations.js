import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { useConversations } from '../../context/ConversationsProvider';

const style = {
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'white',
  borderRadius: '20px',
  color: 'black',
};

function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {conversations.map((conversation, index) => (
          <div key={index}>
            <ListItem button onClick={() => selectConversationIndex(index)} selected={conversation.selected}>
              <ListItemText primary={conversation.recipients.map(recipient => recipient.topic).join(', ')} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}

export default Conversations;
