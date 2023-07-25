import styles from './PrototypesLine.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { handleTranslationX } from '@/utils/handleTranslationX.js';

const PrototypesLine = ({ prototypes, baseVelocity=100, height=400, changeDirection = true }) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);
  handleTranslationX(baseX, baseVelocity, changeDirection);

  const duplicatedPrototypes = prototypes.concat(prototypes);

  //// COMPONENT
  return (
    <motion.div
      className={styles.prototypes_line}
      style={{ x }}>
      {duplicatedPrototypes.map((prototype, index) => {
        return (
          <div
            className={styles.prototypes_line__box}
            key={index}
            style={{ height: `${prototype.heightFactor * height}px` }}>
            <Image
              src={`/videos/video-${prototype.id}.jpg`}
              alt={`${prototype.name}'s image.`}
              width={500}
              height={prototype.heightFactor * height}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default PrototypesLine;
