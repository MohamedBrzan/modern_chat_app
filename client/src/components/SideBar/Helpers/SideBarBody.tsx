import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useGetUsersQuery } from '@/store/api/User';
// import moment from 'moment';
import { Link } from 'react-router-dom';
import maleImg from '/images/male.jpg';
import femaleImg from '/images/female.jpg';

export const Users = () => {
  const { data } = useGetUsersQuery('');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const users = data?.filter((person) => person['_id']! !== user['_id']!);

  return (
    <section className='relative h-full'>
      {users?.map(({ _id, username, gender }, i) => (
        <Link to={`/${_id}`} key={i}>
          <article className='group flex flex-col items-start'>
            <div className='user_info w-full text-base mb-1 cursor-pointer group-hover:bg-slate-200 p-2 flex flex-row gap-3 rounded-sm'>
              <Avatar>
                <AvatarImage
                  src={gender === 'male' ? maleImg : femaleImg}
                  alt={username}
                />
                {/* <AvatarFallback>
                  {username.slice(0, 3).toUpperCase()}
                </AvatarFallback> */}
              </Avatar>
              <div className='user_data flex flex-col w-full'>
                <div className=' user_info__head flex flex-row justify-between'>
                  <h6>{username}</h6>
                  {/* <div className='time text-indigo-600 inline rounded-full p-1 text-sm'>
                    {moment(createdAt).fromNow()}
                  </div> */}
                </div>
                {/* <p className='last_message text-muted-foreground text-sm leading-none'>
                  {lastMessage}
                </p> */}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default function SideBarBody() {
  return (
    <section className='h-full overflow-auto mb-8'>
      <Separator />
      <Users />
    </section>
  );
}
