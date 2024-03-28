import Message from './Message';

interface User {
  id: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  messages: Message[];
  createdAt: string;
}

export default User;
