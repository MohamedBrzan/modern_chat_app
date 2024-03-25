import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './auth/Register';
import SignIn from './auth/SignIn';

function App() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <Routes>
      {user.email ? (
        <>
          <Route path='/*' element={<Home />} />
          <Route path='/:id' element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </>
      ) : (
        <>
          <Route path='/register' element={<Register />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<Navigate to='/sign-in' replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
