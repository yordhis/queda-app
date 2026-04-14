import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;
  showLogin: boolean;
  setShowLogin: (v: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(!isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, showLogin, setShowLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para usar el contexto de autenticación
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export default AuthProvider;
