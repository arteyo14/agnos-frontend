import { io } from 'socket.io-client';

export const socket = io(
  'https://agnos-socket-production.up.railway.app',
  {
    transports: ['websocket'],
  }
);
