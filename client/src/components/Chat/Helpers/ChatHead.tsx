
import { Dot } from 'lucide-react';

export default function ChatHead({
  user,
}: {
  user: { username: string; email: string; gender: string; _id: string };
}) {
  return (
    <section className='bg-slate-100 p-2 shadow-sm'>
      <div className='head_section flex items-center gap-2'>
     
        <div className='user_info'>
          <div className='text-lg'>{user?.username}</div>
          {user ? (
            <p className='text-sm'>
              active
              <span>
                <Dot className='-m-1 inline text-lime-600' />
              </span>
            </p>
          ) : (
            <p>offline</p>
          )}
        </div>
      </div>
    </section>
  );
}
