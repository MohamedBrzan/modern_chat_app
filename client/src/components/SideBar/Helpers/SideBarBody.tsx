import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import UsersList from '@/data/Users';
import moment from 'moment';

import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <section className='relative h-full'>
      {UsersList.map(({ id, name, avatar, lastMessage, createdAt }, i) => (
        <Link to={`/${id}`} key={i}>
          <article className='group flex flex-col items-start'>
            <div className='user_info w-full text-base mb-1 cursor-pointer group-hover:bg-slate-200 p-2 flex flex-row gap-3 rounded-sm'>
              <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>
                  {name.slice(0, 3).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='user_data flex flex-col w-full'>
                <div className=' user_info__head flex flex-row justify-between'>
                  <h6>{name}</h6>
                  <div className='time text-indigo-600 inline rounded-full p-1 text-sm'>
                    {moment(createdAt).fromNow()}
                  </div>
                </div>
                <p className='last_message text-muted-foreground text-sm leading-none'>
                  {lastMessage}
                </p>
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
