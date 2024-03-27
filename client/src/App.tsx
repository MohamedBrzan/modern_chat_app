import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './auth/Register';
import SignIn from './auth/SignIn';
import { useContext } from 'react';
import { UserContext } from './context/UserAuthContext';

function App() {
  const user = useContext(UserContext);

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
