import styles from './BrandsLine.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';

const BrandsLine = ({ brands, baseVelocity = 100 }) => {
  const [velocity, setVelocity] = useState(baseVelocity);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const duplicatedBrands = brands.concat(brands);

  //// COMPONENT
  return (
    <div className={styles.brands_line}>
      <motion.div
        className={styles.brands_line__scroller}
        style={{ x }}
        onHoverStart={() => setVelocity(baseVelocity * 0.5)}
        onHoverEnd={() => setVelocity(baseVelocity)}>
        {duplicatedBrands.map((brand, index) => {
          return <BrandBox key={index} brand={brand} />;
        })}
      </motion.div>
    </div>
  );
};

const BrandBox = ({ brand }) => {
  return (
    <div className={styles.brand_box}>
      <div className={styles.brand_box__image_wrapper}>
        <div className={styles.brand_box__image_wrapper__image}>
          <Image
            src={`/images/image-${brand.id}.jpg`}
            alt={`${brand.name}'s background image.`}
            fill
          />
        </div>
      </div>
      <div className={styles.brand_box__logo}>
        <Image
          src={`/icons/logo-${brand.id}.svg`}
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
