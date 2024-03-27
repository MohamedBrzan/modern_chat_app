import { useGetUsersQuery } from '@/store/api/User';
import { ReactNode, createContext } from 'react';

const user = JSON.parse(localStorage.getItem('user') || '{}');
export const UserContext = createContext(user);
export default function UserAuthContext({ children }: { children: ReactNode }) {
  const { data: users } = useGetUsersQuery('');
  return (
    <UserContext.Provider value={{ user, users }}>
      {children}
    </UserContext.Provider>
  );
}
