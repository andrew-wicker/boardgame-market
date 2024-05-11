import { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthed: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isAuthed: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthed, setIsAuthed] = useState(!!Cookies.get('token'));

  const login = (token: string) => {
    Cookies.set('token', token, { expires: 7 });
    // localStorage.setItem('token', token);
    console.log('token is: ', token);
    setIsAuthed(true);
  };

  const logout = () => {
    // localStorage.removeItem('token');
    Cookies.remove('token');
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// todo research the 'fast refresh' warning and consider refactor
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
