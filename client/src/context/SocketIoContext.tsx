// import { ReactNode, createContext } from 'react';
// import { io } from 'socket.io-client';

import { ReactNode, createContext, useContext, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

// const socket = io('http://localhost:4000', {
//   query: {
//     userId: JSON.parse(localStorage.getItem('user') || '{}')._id,
//   },
// });

// export const SocketContext = createContext(socket);

// export default function SocketFunction({ children }: { children: ReactNode }) {
//   socket.connect();
//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// }

export interface ChatSocketCtxState {
  socket: Socket;
}

export const ChatSocketCtx = createContext<ChatSocketCtxState>(
  {} as ChatSocketCtxState
  // for escaping the eslint error
  // you can write something like this instead to match your
  // predefined type
  /*
  {
  	socket: io(),
    ...
  }
  */
);

export const useChatSocketCtx = () => useContext(ChatSocketCtx);

const ChatSocketCtxProvider = (props: { children?: ReactNode }) => {
  const socketRef = useRef(io({ autoConnect: false }));

  return (
    <ChatSocketCtx.Provider value={{ socket: socketRef.current }}>
      {props.children}
    </ChatSocketCtx.Provider>
  );
};

export default ChatSocketCtxProvider;
