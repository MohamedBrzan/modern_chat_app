import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './components/Chat/Chat';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route
        path='/:id'
        element={
          <div className='flex h-screen overflow-hidden'>
            <SideBar /> <Chat />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
