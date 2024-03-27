// import { SocketContext } from '@/context/SocketIoContext';
import { SocketContext } from '@/context/SocketIoContext';
import { UserContext } from '@/context/UserAuthContext';
import { useContext, useEffect } from 'react';
// import { useContext, useEffect } from 'react';

export default function ChatBody({
  messages,
  setMessage,
  chatBodyRef,
}: {
  messages: {
    receiver: string;
    sender: string;
    message: string;
    isDeleted: boolean;
    isEdited: boolean;
  }[];

  setMessage: React.Dispatch<
    React.SetStateAction<
      | []
      | {
          receiver: string;
          sender: string;
          message: string;
          isDeleted: boolean;
          isEdited: boolean;
        }[]
    >
  >;
  chatBodyRef: React.RefObject<HTMLDivElement>;
}) {
  const { user } = useContext(UserContext);

  const socket = useContext(SocketContext);

  useEffect(() => {
    const chatBody = chatBodyRef.current!;
    setTimeout(() => chatBody.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [chatBodyRef, messages]);

  useEffect(() => {
    socket.on('received_message', (data) => {
      setMessage([...messages, { ...data }]);

      const chatBody = chatBodyRef.current!;
      chatBody.scrollTop = chatBody.scrollHeight + 400;
    });
  }, [socket, messages, setMessage, chatBodyRef]);

  return (
    <section className='flex flex-col h-full overflow-auto' ref={chatBodyRef}>
      {messages.map(({ sender, message }, i) => (
        <div className='message_container' key={i}>
          {sender === user['_id'].toString() ? (
            <div className='my_message text-right ml-auto p-2 rounded-full bg-slate-100 w-fit m-3 max-w-md text-wrap'>
              {message}
            </div>
          ) : (
            <div className='my_message p-2 rounded-full bg-blue-300 w-fit m-3 max-w-md text-wrap'>
              {message}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
