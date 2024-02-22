import React, { createContext, useContext, useState } from 'react';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveAbUs, setIsActiveAbUs] = useState(false);
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActivePartner, setIsActivePartner] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);

  const handleLinkClick = (H, A, S, P,C) => {
    setIsActiveHome(H);
    setIsActiveAbUs(A);
    setIsActiveService(S);
    setIsActivePartner(P);
    setIsActiveContact(C);
  };

  return (
    <LinkContext.Provider value={{ isActiveHome, isActiveAbUs, isActiveService, isActivePartner,isActiveContact, handleLinkClick }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error('useLinkContext must be used within a LinkProvider');
  }
  return context;
};
