import { createContext, useContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [lenguage, setLenguage] = useState('en');
  const [isHeaderContactFormOpen, setIsHeaderContactFormOpen] = useState(false);
  const [isClosingContactFormOpen, setIsClosingContactFormOpen] = useState(false);
  const [headerContactFormHeight, setHeaderContactFormHeight] = useState(0);

  const [scrollToTopBtnShow, setScrollToTopBtnShow] = useState(false);
  const [scrollToTopBtnDirection, setScrollToTopBtnDirection] = useState('left');
  const [heroBtnDirection, setHeroBtnDirection] = useState('left');
  const [closingBtnDirection, setClosingBtnDirection] = useState('up');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsHeaderContactFormOpen(true);
    }, 750)
  };

  // HANDLE BUTTON SHOW
  let prevScrollY = 0;
  useEffect(() => {
    const handleBtnShow = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 1235 && window.scrollY < 250 || window.scrollY < 500) {
        setScrollToTopBtnShow(false);
      } else if
        (window.innerWidth >= 1235 || currentScrollY < prevScrollY) {
        setScrollToTopBtnShow(true);
      } else {
        setScrollToTopBtnShow(false);
      }
      prevScrollY = currentScrollY;
    }

    const handleClosingContactForm = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const bottomThreshold = totalHeight - viewportHeight - 10;
      if (scrollPosition >= bottomThreshold) {
        setIsClosingContactFormOpen(true);
      } 
    };

    window.addEventListener('scroll', handleBtnShow);
    window.addEventListener('scroll', handleClosingContactForm);
    return () => {
      window.removeEventListener('scroll', handleBtnShow);
      window.removeEventListener('scroll', handleClosingContactForm);
    }
  }, []);

  // HANDLE BUTTON DIRECTION
  useEffect(() => {
    if (heroBtnDirection === 'left') {
      setScrollToTopBtnDirection('left')
    } else if (closingBtnDirection === 'up') {
      setScrollToTopBtnDirection('up')
    } else {
      setScrollToTopBtnDirection('left')
    }
  }, [heroBtnDirection, closingBtnDirection]);




  //// COMPONENT
  return (
    <GlobalContext.Provider
      value={{
        lenguage,
        setLenguage,

        isContactFormOpen: isHeaderContactFormOpen,
        setIsContactFormOpen: setIsHeaderContactFormOpen,
        isContactFormShow: isClosingContactFormOpen,
        setIsContactFormShow: setIsClosingContactFormOpen,

        contactFormHeight: headerContactFormHeight,
        setContactFormHeight: setHeaderContactFormHeight,

        scrollToTopBtnShow,
        setScrollToTopBtnShow,
        scrollToTop,

        scrollToTopBtnDirection,
        setHeroBtnDirection,
        setClosingBtnDirection,
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