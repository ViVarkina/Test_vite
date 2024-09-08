import { createContext, ReactNode, useState } from 'react';
import { BASE_URL } from '@/shared';

interface AuthContextType {
  isAuthenticated: boolean;
  singIn: (login: string, password: string) => void;
  authMe: () => void;
  logAuth: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface PropsType {
  children: ReactNode;
}

const ACCESS_TOKEN = 'access_token';
export const AuthProvider = ({ children }: PropsType) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const singIn = async (login: string, password: string) => {
    const result = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ username: login, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (result.ok) {
      const data = await result.json();
      localStorage.setItem(ACCESS_TOKEN, data.access_token);
      setIsAuthenticated(true);
    }
  };
  const authMe = async () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token) {
      const result = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
      });
      if (result.ok) {
        setIsAuthenticated(true);
      } else {
        console.error('Autherr');
        localStorage.removeItem(ACCESS_TOKEN);
      }
    }
  };

  const logAuth = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, singIn, logAuth, authMe }}>
      {children}
    </AuthContext.Provider>
  );
};
