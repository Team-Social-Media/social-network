import React, { useContext, useState, useEffect, useRef, useCallback } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../context/ContactsProvider';
import { useSocket } from './SocketProvider';

const ConversationsContext = React.createContext();

export function useConversations(){
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ username, children }) {
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();
  const socket = useSocket();

  function createConversation (recipients){
    setConversations(prevConversations => {
      return [...prevConversations, { recipients, messages: [] }]
    })
  }

  const addMessageToConversation = useCallback(({ recipients, text, sender }) => {
    setConversations(prevConversations => {
      let madeChange = false;
      const newMessage = { sender, text };
      const newConversations = prevConversations.map(conversation => {
        if(arrayEquality(conversation.recipients, recipients)){
          madeChange = true
          return {...conversation, messages: [...conversation.messages, newMessage]};
        }
        return conversation;
      });

      if(madeChange){
        return newConversations;
      } else {
        return [...prevConversations, { recipients, messages: [newMessage] }]
      }
    })
  }, [setConversations]);

  useEffect(() => {
    if (socket == null) return

    socket.on('receive-message', (...args) => {
      // if args.recipients isn't in our conversations then ignore...
      if (conversations.some((conv) => arrayEquality(conv.recipients, args[0].recipients))) {
        addMessageToConversation(...args);
      }
    });

    return () => socket.off('receive-message')
  }, [socket, addMessageToConversation, conversations]);

  function sendMessage(recipients, text){
    addMessageToConversation({ recipients, text, sender: username });
    socket.emit('send-message', { recipients, text, sender: username });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.username === recipient;
      })
      const topic = (contact && contact.topic) || recipient
      return { username: recipient, topic };
    });
    const messages = conversation.messages.map(message => {
      const contact = contacts.find(contact => {
        return contact.username === message.sender
      })
      const topic = (contact && contact.topic) || message.sender
      const fromMe = username === message.sender
      return { ...message, senderName: topic, fromMe }
    })
    const selected = index === selectedConversationIndex;
    return {...conversation, messages, recipients, selected }
  })

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}

function arrayEquality(a, b){
  if(a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}
