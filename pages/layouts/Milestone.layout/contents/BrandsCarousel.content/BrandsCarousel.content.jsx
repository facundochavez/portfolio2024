import styles from './BrandsCarousel.content.module.scss';
import BrandsLine from '@/components/BrandsLine/BrandsLine';
import brands from '@/data/brands.data.json';
import useIsMobile from '@/hooks/useIsMobile';

const BrandsCarousel = () => {
  const { isMobile } = useIsMobile();

  const firstLineMobile = brands.slice(0, 5);
  const secondLineMobile = brands.slice(5, 11);
  const thirdLineMobile = brands.slice(11, 16);
  const fourthLineMobile = brands.slice(16, 22);

  const firstLineDesktop = brands.slice(0, 7); 
  const secondLineDesktop = brands.slice(7, 14);
  const thirdLineDesktop = brands.slice(14, 22);

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
          <BrandsLine brands={thirdLineDesktop} baseVelocity={1.1} />
        </>
      )}
    </div>
  );
};

export default BrandsCarousel;
