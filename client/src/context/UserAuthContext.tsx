import { ReactNode, createContext } from 'react';

const user = JSON.parse(localStorage.getItem('user') || '{}');
export const UserContext = createContext(user);
export default function UserAuthContext({ children }: { children: ReactNode }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
