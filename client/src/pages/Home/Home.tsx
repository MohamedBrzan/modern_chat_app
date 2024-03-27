import Header from '@/common/Header/Header';
import Chat from '@/components/Chat/Chat';
import SideBar from '@/components/SideBar/SideBar';
import { Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex h-screen overflow-hidden'>
        <SideBar />

        <Routes>
          <Route path=':id' element={<Chat />} />
          <Route
            path='*'
            element={
              <div className='text-sm flex flex-col items-center justify-center h-full text-center w-full bg-slate-200'>
                This is one of the most popular real time application in the
                whole world
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}
