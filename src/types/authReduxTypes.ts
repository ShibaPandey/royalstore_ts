export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface authReduxTypes {
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuth: boolean;
}
