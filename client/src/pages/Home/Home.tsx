import Chat from '@/components/Chat/Chat';
import SideBar from '@/components/SideBar/SideBar';

export default function Home() {
  return (
    <section className='flex flex-row flex-wrap bg-slate-50 overflow-hidden h-screen'>
      <SideBar />
      <Chat />
    </section>
  );
}
