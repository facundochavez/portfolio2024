import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [contactFormHeight, setContactFormHeight] = useState(0);
  const [scrollToTopBtnDirection, setScrollToTopBtnDirection] = useState('left');
  const [lenguage, setLenguage] = useState('en');


  //// COMPONENT
  return (
    <GlobalContext.Provider
      value={{
        contactFormHeight,
        setContactFormHeight,
        lenguage,
        setLenguage
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('GlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalProvider;