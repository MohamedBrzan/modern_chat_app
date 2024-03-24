import { UserType } from '@/data/Users';

export default function ChatBody({ user: { messages } }: { user: UserType }) {
  const admin = '';
  return (
    <section className='flex flex-col h-full'>
      {messages.map(({ sender, receiver, message }, i) => (
        <div className='message_container'>
          {sender === 'thisJohnDoe' ? (
            <div className='my_message text-right ml-auto p-2 rounded-full bg-slate-100 w-fit m-3 max-w-md'>
              {message}
            </div>
          ) : (
            <div className='my_message p-2 rounded-full bg-blue-300 w-fit m-3 max-w-md'>
              {message}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
