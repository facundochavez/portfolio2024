import styles from './Brands.content.module.scss';
import BrandsLine from '@/components/BrandsLine/BrandsLine';
import brands from '@/data/brands.data.json';

const BrandsContent = () => {
  const firstLine = brands.slice(0, 6);
  const secondLine = brands.slice(6, 11);
  const thirdLine = brands.slice(11, 17);

  //// COMPONENT
  return (
    <div className={styles.brands_content}>
      <BrandsLine brands={firstLine} baseVelocity={-0.5} />
      <BrandsLine brands={secondLine} baseVelocity={0.5} />
      <BrandsLine brands={thirdLine} baseVelocity={1} />
    </div>
  );
};

export default BrandsContent;
