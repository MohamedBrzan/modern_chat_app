import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function ChatFooter() {
  return (
    <section className='flex flex-row mx-2 items-center gap-4'>
      <Textarea
        className='resize-none relative pr-10'
        placeholder='write a message...'
      />

      {/* <Send className='absolute bottom-2.5 right-5 cursor-pointer hover:text-blue-500' /> */}
      {/* <Button className='hover:bg-blue-500 hover:-rotate-45'> */}
      <Send className='cursor-pointer hover:-rotate-45' />
      {/* </Button> */}
    </section>
  );
}
