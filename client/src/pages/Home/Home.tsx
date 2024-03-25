import Header from '@/common/Header/Header';
import Chat from '@/components/Chat/Chat';
import SideBar from '@/components/SideBar/SideBar';


export default function Home() {


  return (
    <>
      <Header />
      <div className='flex h-screen overflow-hidden'>
        <SideBar /> <Chat />
      </div>
    </>
  );
}
