import { useChatSocketCtx } from '@/context/SocketIoContext';
import { useEffect, useRef } from 'react';
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

  const activityRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const chatBody = chatBodyRef.current!;
    setTimeout(() => chatBody.scrollIntoView({ behavior: 'smooth' }), 100000);
    socket.on('new message', (data) => {
      setMessage([...messages, { ...data }]);
      chatBody.scrollTop = chatBody.scrollHeight;
    });
    const activity = activityRef.current!;
    socket.on('keydown', (username: string) => {
      activity.textContent = `${username} is typing...`;

      chatBody.scrollTop = chatBody.scrollHeight + activity.scrollHeight;
    });

    socket.on('keyup', () => {
      activity.textContent = '';
    });

    chatBody.scrollTop = chatBody.scrollHeight;
  }, [socket, messages, setMessage, chatBodyRef]);

  return (
    <section className='flex flex-col h-full overflow-auto' ref={chatBodyRef}>
      {messages?.map(({ sender, message, createdAt }, i) => (
        <div className='message_container' key={i}>
          {sender === user['_id'].toString() ? (
            <section className='mb-5 p-2'>
              <div
                className='text-right ml-auto p-1 rounded-xl bg-slate-100 w-fit max-w-96'
                style={{ wordWrap: 'break-word' }}
              >
                <span>
                  <small>{message}</small>
                </span>
              </div>
              <p className='text-right text-sm text-zinc-400'>
                <small>{moment(createdAt).fromNow()}</small>
              </p>
            </section>
          ) : (
            <section className='mb-5 p-2'>
              <div
                className='text-left mr-auto p-1 rounded-xl bg-blue-400 w-fit max-w-96'
                style={{ wordWrap: 'break-word' }}
              >
                <span>
                  <small>{message}</small>
                </span>
              </div>
              <p className='text-left text-sm text-zinc-400'>
                <small>{moment(createdAt).fromNow()}</small>
              </p>
            </section>
          )}
        </div>
      ))}
      <p className='activity p-2 text-sm'>
        <em ref={activityRef}></em>
      </p>
    </section>
  );
}
