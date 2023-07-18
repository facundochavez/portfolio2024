import styles from './BrandsCarousel.content.module.scss';
import BrandsLine from '@/components/BrandsLine/BrandsLine';
import brands from '@/data/brands.data.json';
import { useEffect, useState } from 'react';

const BrandsCarousel = () => {
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

  const firstLineMobile = brands.slice(0, 4);
  const secondLineMobile = brands.slice(4, 8);
  const thirdLineMobile = brands.slice(8, 12);
  const fourthLineMobile = brands.slice(12, 17);

  const firstLineDesktop = brands.slice(0, 5);
  const secondLineDesktop = brands.slice(5, 10);
  const thirdLineDesktop = brands.slice(10, 17);

  //// COMPONENT
  return (
    <div className={styles.brands_carousel}>
      {isMobile ? (
        <>
          <BrandsLine brands={firstLineMobile} baseVelocity={-1} />
          <BrandsLine brands={secondLineMobile} baseVelocity={2.5} />
          <BrandsLine brands={thirdLineMobile} baseVelocity={1.5} />
          <BrandsLine brands={fourthLineMobile} baseVelocity={-1} />
        </>
      ) : (
        <>
          <BrandsLine brands={firstLineDesktop} baseVelocity={-0.5} />
          <BrandsLine brands={secondLineDesktop} baseVelocity={0.5} />
          <BrandsLine brands={thirdLineDesktop} baseVelocity={1} />
        </>
      )}
    </div>
  );
};

export default BrandsCarousel;
