import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ username, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    let newSocket;

    fetch('/api/socket').then(() => {
      newSocket = io()
      setSocket(newSocket)

      newSocket.on('connect', () => {
        console.log('Socket connected');
      });
    });

    return () => newSocket?.close()
  }, [username])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

/**
    fetch('/api/socket').then(() => {
      socket = io();

      if (socket.connected) {
        console.log
        return;
      }

      socket.on('connect', () => {
        console.log('Socket connected');
      });

      socket.on('update-chat', newMsg => {
        addMessageToConversation(JSON.parse(newMsg));
      });
    });
 */
