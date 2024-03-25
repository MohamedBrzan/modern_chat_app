import { ReactNode, createContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export const SocketContext = createContext(socket);

export default function SocketFunction({ children }: { children: ReactNode }) {
  socket.connect();
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
