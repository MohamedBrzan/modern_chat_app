import { useParams } from 'react-router-dom';
import ChatBody from './Helpers/ChatBody';
import ChatFooter from './Helpers/ChatFooter';
import ChatHead from './Helpers/ChatHead';
import { useGetUsersQuery } from '@/store/api/User';

export default function Chat() {
  const { id } = useParams();

  const { data } = useGetUsersQuery('');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const selectedUser = data?.find((person) => person['_id']! === id);

  return (
    <article className='w-full md:w-3/4 flex-1 h-screen bg-slate-200 flex flex-col'>
      {id && selectedUser ? (
        <>
          <ChatHead user={selectedUser} />
          <ChatBody user={user} />
          <ChatFooter />
        </>
      ) : (
        <div className='text-sm flex flex-col items-center justify-center h-full'>
          This is one of the most popular real time application in the whole
          world
        </div>
      )}
    </article>
  );
}
