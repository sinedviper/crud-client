export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
}

export interface Users {
  users: User[];
}
