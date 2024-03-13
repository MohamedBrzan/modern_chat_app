import { Dot } from 'lucide-react';

export default function ChatHead() {
  const user = {
    name: 'John Doe',
    avatar: '',
    email: 'john@example.com',
    id: 'thisJohnDoe',
    messages: [
      {
        sender: 'thisMike',
        receiver: 'thisJohnDoe',
        message: 'Hello John, This is Mike',
      },
      {
        receiver: 'thisDoe',
        sender: 'thisJohnDoe',
        message: 'hi Mike!!, This is John Doe',
      },
    ],
  };
  return (
    <section className='bg-slate-100 p-2 shadow-sm'>
      <div className='text-lg'>{user.name}</div>
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
    </section>
  );
}
