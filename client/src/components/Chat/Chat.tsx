import { useParams } from 'react-router-dom';
import ChatBody from './Helpers/ChatBody';
import ChatFooter from './Helpers/ChatFooter';
import ChatHead from './Helpers/ChatHead';
import { useGetUsersQuery } from '@/store/api/User';
import { useEffect, useRef, useState } from 'react';
import { useGetMessagesQuery } from '@/store/api/Message';
import Message from '@/interfaces/Message';

export default function Chat() {
  const { id } = useParams();
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const { data } = useGetUsersQuery('');
  const selectedUser = data?.find((person) => person['_id'] === id);

  const {
    isLoading,
    isSuccess,
    data: msgs,
    refetch,
  } = useGetMessagesQuery(id ? id : '');

  const [messages, setMessages] = useState<Message[] | []>([]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setMessages(msgs);
    }
    setTimeout(
      () => chatBodyRef?.current?.scrollIntoView({ behavior: 'smooth' }),
      200
    );
  }, [isLoading, isSuccess, msgs, id, refetch]);

  return (
    <article className='w-full md:w-3/4 flex-1 h-screen bg-slate-200 flex flex-col'>
      {selectedUser && <ChatHead user={selectedUser} />}
      <ChatBody
        messages={messages}
        setMessage={setMessages}
        chatBodyRef={chatBodyRef}
      />
      <ChatFooter chatBodyRef={chatBodyRef} />
    </article>
  );
}
