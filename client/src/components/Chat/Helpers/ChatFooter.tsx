import { Textarea } from '@/components/ui/textarea';
import { useChatSocketCtx } from '@/context/SocketIoContext';
import State from '@/store/StateType';
import { useSendMessageMutation } from '@/store/api/Message';
import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ChatFooter({
  chatBodyRef,
}: {
  chatBodyRef: React.RefObject<HTMLDivElement>;
}) {
  const { user } = useSelector((state: State) => state.Auth);
  const { socket } = useChatSocketCtx();
  const [message, setMessage] = useState<string>('');
  const { id } = useParams();
  const [sendMessage] = useSendMessageMutation();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    await sendMessage({ receiverId: id ? id : '', message });
    setMessage('');
    const chatBody = chatBodyRef.current!;
    chatBody.scrollIntoView({ behavior: 'smooth' });
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setMessage(target.value);
  };

  useEffect(() => {
    const textarea = textAreaRef.current!;

    textarea.addEventListener('keypress', () => {
      socket.emit('keydown', { username: user.username, receiverId: id });
    });
    let timer: NodeJS.Timeout;
    textarea.addEventListener('keyup', () => {
      clearTimeout(timer);
      timer = setTimeout(
        () =>
          socket.emit('keyup', {
            username: user.username,
            senderId: id,
          }),
        3000
      );
    });
  }, [id, socket, user.username, textAreaRef?.current!]);

  return (
    <section className='flex flex-row mx-2 items-center gap-4'>
      <Textarea
        ref={textAreaRef}
        className='resize-none relative pr-10'
        placeholder='write a message...'
        onChange={handleChange}
        value={message}
      />

      {/* <Send className='absolute bottom-2.5 right-5 cursor-pointer hover:text-blue-500' /> */}
      {/* <Button className='hover:bg-blue-500 hover:-rotate-45'> */}
      <Send
        className='cursor-pointer hover:-rotate-45'
        onClick={handleSubmit}
      />
      {/* </Button> */}
    </section>
  );
}
