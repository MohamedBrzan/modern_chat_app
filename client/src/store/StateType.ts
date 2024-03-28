export interface User {
  username: string;
  email: string;
  password: string;
  gender: string;
  createdAt: string;
  _id: string;
}

type State = {
  Auth: {
    user: User;
  };
};

export default State;
