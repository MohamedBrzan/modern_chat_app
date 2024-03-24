import OffCanvas from '@/components/OffCanvas/OffCanvas';
import { UserType } from '@/data/Users';
import { Dot } from 'lucide-react';

export default function ChatHead({ user }: { user: UserType }) {
  return (
    <section className='bg-slate-100 p-2 shadow-sm'>
      <div className='head_section flex items-center gap-2'>
        <OffCanvas />
        <div className='user_info'>
          <div className='text-lg'>{user?.name}</div>
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
