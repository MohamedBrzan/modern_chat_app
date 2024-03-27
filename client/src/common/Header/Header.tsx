import OffCanvas from '@/components/OffCanvas/OffCanvas';
import { buttonVariants } from '@/components/ui/button';
import { logoutUser } from '@/store/AsyncThunkApis/LogoutAsyncThunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, never>>();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className='bg-blue-400 flex flex-row justify-between md:justify-end'>
      <OffCanvas />
      {user ? (
        <Link
          to='/sign-in'
          className={buttonVariants({ variant: 'link' })}
          onClick={() => {
            dispatch(logoutUser());
            navigate('/sign-in');
          }}
        >
          Sign out
        </Link>
      ) : (
        <Link to='/register' className={buttonVariants({ variant: 'link' })}>
          Register
        </Link>
      )}
    </div>
  );
}
