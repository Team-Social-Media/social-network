import { useCallback, useState } from "react";
import { useConversations } from "../../context/ConversationsProvider";
import styles from '../../styles/Chat.module.css';

function OpenConversation() {
  const [text, setText] = useState('');
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(selectedConversation.recipients.map(recipient => recipient.username), text);
    setText('');
  }

  return (
    <div>
      <div>
        <div>
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index;
            return (
              <div ref={lastMessage ? setRef : null} key={index} className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end' : ''}`}>
                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>{message.text}</div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName}</div>
              </div>
            )
          })}
        </div>

      </div>
      <form className="m-2" onSubmit={handleSubmit}>
        <label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ height: '75px', resize: 'none' }} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default OpenConversation;
