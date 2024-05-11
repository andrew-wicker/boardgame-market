import { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthed: boolean;
  user: never | null;
  login: (token: string, userId: string) => void;
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
  const [user, setUser] = useState(null);

  const login = (token: string, userId: string) => {
    Cookies.set('token', token, { expires: 7 });
    localStorage.setItem('userId', userId);
    console.log('token is: ', token);
    console.log('userId: ', userId);
    setIsAuthed(true);
  };

  const logout = () => {
    // localStorage.removeItem('token');
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
