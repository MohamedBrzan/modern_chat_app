import OffCanvas from '@/components/OffCanvas/OffCanvas';
import { buttonVariants } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const navigate = useNavigate();
  return (
    <div className='bg-blue-400 flex flex-row justify-between md:justify-end'>
      <OffCanvas />
      {user ? (
        <Link
          to='/sign-in'
          className={buttonVariants({ variant: 'link' })}
          onClick={() => {
            localStorage.clear();
            location.reload();
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
