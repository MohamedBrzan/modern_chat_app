import ChatBody from './Helpers/ChatBody';
import ChatFooter from './Helpers/ChatFooter';
import ChatHead from './Helpers/ChatHead';

export default function Chat() {
  return (
    <article className='w-3/4 flex-1 h-screen bg-slate-200 flex flex-col'>
      <ChatHead />
      <ChatBody />
      <ChatFooter />
    </article>
  );
}
