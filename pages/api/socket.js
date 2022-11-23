import { Server } from 'socket.io'

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
