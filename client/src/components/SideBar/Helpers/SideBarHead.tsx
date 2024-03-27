import { Avatar, AvatarImage } from '@/components/ui/avatar';
import maleImg from '/images/male.jpg';
import femaleImg from '/images/female.jpg';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useContext } from 'react';
import { UserContext } from '@/context/UserAuthContext';

export default function SideBarHead() {
  const user = useContext(UserContext);

  return (
    <>
      <article className='flex flex-row flex-1 gap-2 items-center my-2'>
        <Avatar>
          <AvatarImage
            src={user.gender === 'male' ? maleImg : femaleImg}
            alt={user?.username}
          />
        </Avatar>
        <div className='user_info'>
          <div className='capitalize text-ellipsis'>
            <strong>{user?.username}</strong>
          </div>
          <p className='text-muted-foreground'>{user?.email}</p>
        </div>
      </article>
      <Separator />
      <Input
        type='search'
        className='rounded-full w-full md:w-11/12 mx-auto my-2'
        placeholder='Search message...'
      />
    </>
  );
}
