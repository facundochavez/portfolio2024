import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleIsMobile = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleIsMobile();

    addEventListener('resize', handleIsMobile);

    return () => {
      removeEventListener('resize', handleIsMobile);
    };
  }, []);

  return isMobile;
};
