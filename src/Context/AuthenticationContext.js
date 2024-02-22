import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthenticationContext = createContext();

// Create the context provider
export const AuthenticationProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuthentication = (bool) => {
    setIsAuth(bool);
  };

  // Provide the context value to the children
  return (
    <AuthenticationContext.Provider value={{ isAuth, handleAuthentication }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error('useAuthenticationContext must be used within an AuthenticationProvider');
  }

  return context;
};
