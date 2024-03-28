import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './auth/Register';
import SignIn from './auth/SignIn';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserAuthContext';
import { useChatSocketCtx } from './context/SocketIoContext';

function App() {
  const { socket } = useChatSocketCtx();
  const user = useContext(UserContext);

  useEffect(() => {
    socket.on('connection', () => {
      console.info('Connection established');
    });
  }, [socket]);

  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route
        path='*'
        element={
          user ? (
            <Navigate to='/' replace />
          ) : (
            <Navigate to='/sign-in' replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
