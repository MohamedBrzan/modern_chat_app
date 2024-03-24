import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatarImg from '/images/user3.jpg';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function SideBarHead() {
  const user = {
    name: 'ali mohamed',
    email: 'mohamed@gmail.com',
    avatar: 'https://github.com/shadcn.png',
  };
  return (
    <>
      {' '}
      <article className='flex flex-row flex-1 gap-2 items-center my-2'>
        <Avatar>
          <AvatarImage src={avatarImg} alt={user.name} />
          <AvatarFallback>{user.name.slice(0, 3).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className='user_info'>
          <div className='capitalize text-ellipsis'>
            <strong>{user.name}</strong>
          </div>
          <p className='text-muted-foreground'>{user.email}</p>
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
