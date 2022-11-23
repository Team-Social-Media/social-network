// const io = require('socket.io')(5000);

// io.on('connection', socket => {
//   const username = socket.handshake.query.id
//   socket.join(username)

//   socket.on('send-message', ({ recipients, text}) => {
//     recipients.forEach(recipient => {
//       const newRecipients = recipients.filter(r => r !== recipient)
//       newRecipients.push(username)
//       socket.broadcast.to(recipient).emit('recieve-message', {recipients: newRecipients, sender: username, text})
//     })
//   })
// })

import { Server } from 'Socket.IO'

const SocketHandler = (_, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    res.socket.server.io.on('connection', socket => {
      socket.on('send-message', msg => {
        console.log(`Got new chat: ${JSON.stringify(msg)}`);
        socket.broadcast.emit('receive-message', msg);
      });
    });
  }

  res.end();
}

export default SocketHandler
