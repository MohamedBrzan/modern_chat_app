import { Textarea } from '@/components/ui/textarea';
import { SocketContext } from '@/context/SocketIoContext';
import { UserContext } from '@/context/UserAuthContext';
import { useSendMessageMutation } from '@/store/api/Message';
import { Send } from 'lucide-react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ChatFooter({
  chatBodyRef,
}: {
  chatBodyRef: React.RefObject<HTMLDivElement>;
}) {
  const [message, setMessage] = useState<string>('');
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);
  const { id } = useParams();
  const [sendMessage] = useSendMessageMutation();

  const handleSubmit = async () => {
    await sendMessage({ receiverId: id ? id : '', message }).then(() => {
      socket.emit('send_message', {
        sender: user['_id'],
        receiver: id,
        message,
      });
    });
    setMessage('');
    const chatBody = chatBodyRef.current!;
    chatBody.scrollIntoView({ behavior: 'smooth' });
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setMessage(target.value);
  };

  return (
    <section className='flex flex-row mx-2 items-center gap-4'>
      <Textarea
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
