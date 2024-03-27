import { useParams } from 'react-router-dom';
import ChatBody from './Helpers/ChatBody';
import ChatFooter from './Helpers/ChatFooter';
import ChatHead from './Helpers/ChatHead';
import { useGetUsersQuery } from '@/store/api/User';
import { useEffect, useRef, useState } from 'react';
import { useGetMessagesQuery } from '@/store/api/Message';

export default function Chat() {
  const { id } = useParams();
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const { data } = useGetUsersQuery('');
  const selectedUser = data?.find((person) => person['_id'] === id);

  const { isLoading, isSuccess, data: msgs } = useGetMessagesQuery(id || '');

  const [messages, setMessages] = useState<
    | {
        receiver: string;
        sender: string;
        message: string;
        isDeleted: boolean;
        isEdited: boolean;
      }[]
    | []
  >([]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setMessages(msgs);
    }
  }, [isLoading, isSuccess, msgs]);

  return (
    <article className='w-full md:w-3/4 flex-1 h-screen bg-slate-200 flex flex-col'>
      {selectedUser && <ChatHead user={selectedUser} />}
      <ChatBody messages={messages} setMessage={setMessages} chatBodyRef={chatBodyRef} />
      <ChatFooter chatBodyRef={chatBodyRef} />
    </article>
  );
}
