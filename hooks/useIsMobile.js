import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleIsMobile = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
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

  return {
    isMobile: isMobile,
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
};

export default useIsMobile;