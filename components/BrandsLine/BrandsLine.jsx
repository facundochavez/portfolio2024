import styles from './BrandsLine.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { handleTranslationX } from '@/utils/handleTranslationX.js';

const BrandsLine = ({ brands, baseVelocity = 100 }) => {
  const [velocity, setVelocity] = useState(baseVelocity);
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);
  handleTranslationX(baseX, velocity);

  const duplicatedBrands = brands.concat(brands);

  //// COMPONENT
  return (
    <motion.div
      className={styles.brands_line}
      style={{ x }}
      onHoverStart={() => setVelocity(baseVelocity * 0.5)}
      onHoverEnd={() => setVelocity(baseVelocity)}>
      {duplicatedBrands.map((brand, index) => {
        return (
          <div key={index}>
            <BrandBox brand={brand} />
          </div>
        );
      })}
    </motion.div>
  );
};

const BrandBox = ({ brand }) => {
  return (
    <div className={styles.brand_box}>
      <div className={styles.brand_box__image_wrapper}>
        <div className={styles.brand_box__image_wrapper__image}>
          <Image
            src={`/images/brands-backgrounds/image-${brand.id}.jpg`}
            alt={`${brand.name}'s background image.`}
            fill
          />
        </div>
      </div>
      <div className={styles.brand_box__logo}>
        <Image
          src={`/icons/logos/logo-${brand.id}.svg`}
          alt={`${brand.name}'s logo.`}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default BrandsLine;
