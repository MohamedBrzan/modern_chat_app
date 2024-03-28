import { useChatSocketCtx } from '@/context/SocketIoContext';
import { useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import State from '@/store/StateType';
import Message from '@/interfaces/Message';

export default function ChatBody({
  messages,
  setMessage,
  chatBodyRef,
}: {
  messages: Message[];

  setMessage: React.Dispatch<React.SetStateAction<Message[] | []>>;
  chatBodyRef: React.RefObject<HTMLDivElement>;
}) {
  const { user } = useSelector((state: State) => state.Auth);

  const { socket } = useChatSocketCtx();

  useEffect(() => {
    const chatBody = chatBodyRef.current!;
    setTimeout(() => chatBody.scrollIntoView({ behavior: 'smooth' }), 100);
    socket.on('new_message', (data) => {
      console.log(data);
      setMessage([...messages, { ...data }]);

      const chatBody = chatBodyRef.current!;
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }, [socket, messages, setMessage, chatBodyRef]);

  return (
    <section className='flex flex-col h-full overflow-auto' ref={chatBodyRef}>
      {messages?.map(({ sender, message, createdAt }, i) => (
        <div className='message_container' key={i}>
          {sender === user['_id'].toString() ? (
            <section className='my_message mb-5 p-2'>
              <div className='my_message text-right ml-auto p-1 rounded-full bg-slate-100 w-fit max-w-md text-wrap'>
                <span>{message}</span>
              </div>
              <p className='text-right text-sm text-zinc-400'>
                <small>{moment(createdAt).fromNow()}</small>
              </p>
            </section>
          ) : (
            <section className='my_message mb-5 p-2'>
              <div className='my_message text-left mr-auto p-1 rounded-full bg-blue-400 w-fit max-w-md text-wrap'>
                <span>{message}</span>
              </div>
              <p className='text-left text-sm text-zinc-400'>
                <small>{moment(createdAt).fromNow()}</small>
              </p>
            </section>
          )}
        </div>
      ))}
    </section>
  );
}
