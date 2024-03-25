import { Textarea } from '@/components/ui/textarea';
import { SocketContext } from '@/context/SocketIoContext';
import { useGetUsersQuery } from '@/store/api/User';
import { Send } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ChatFooter() {
  const [message, setMessage] = useState<string>('');
  const socket = useContext(SocketContext);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const { data } = useGetUsersQuery('');
  const { id } = useParams();

  const handleSubmit = () => {
    socket.emit('send_message', {
      sender: user['_id'],
      receiver: data?.find((u) => u['_id'] === id),
      message,
    });
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setMessage(target.value);
  };

  useEffect(() => {
    socket.on('received_message', (data) => console.log(data));
  }, [socket]);

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
