import { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface User {
  token: string;
  userId: string;
  username?: string | null;
  email?: string | null;
}

interface AuthContextType {
  isAuthed: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isAuthed: false,
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthed, setIsAuthed] = useState(!!Cookies.get('token'));
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    Cookies.set('token', user.token, { expires: 7 });
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('token', user.token);
    setUser(user);
    console.log('user in login function in AuthContext: ', user);
    setIsAuthed(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUser(null);
    Cookies.remove('token');
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// todo research the 'fast refresh' warning and consider refactor
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
