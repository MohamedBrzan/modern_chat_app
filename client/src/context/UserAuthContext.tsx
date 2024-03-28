import State, { User } from '@/store/StateType';
import { ReactNode, createContext } from 'react';
import { useSelector } from 'react-redux';

export const UserContext = createContext({} as User);
export default function UserAuthContext({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: State) => state.Auth);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
