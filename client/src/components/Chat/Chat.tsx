import { useParams } from 'react-router-dom';
import ChatBody from './Helpers/ChatBody';
import ChatFooter from './Helpers/ChatFooter';
import ChatHead from './Helpers/ChatHead';
import { useGetUsersQuery } from '@/store/api/User';
import { useContext } from 'react';
import { UserContext } from '@/context/UserAuthContext';

export default function Chat() {
  const { id } = useParams();
  console.log(id);

  const { data } = useGetUsersQuery('');
  const user = useContext(UserContext);
  const selectedUser = data?.find((person) => person['_id']! === id);

  return (
    <article className='w-full md:w-3/4 flex-1 h-screen bg-slate-200 flex flex-col'>
      {selectedUser && <ChatHead user={selectedUser} />}
      <ChatBody user={user} />
      <ChatFooter />
    </article>
  );
}
