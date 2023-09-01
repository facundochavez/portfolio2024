import styles from './PrototypesLine.module.scss';
import Image from 'next/image';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { handleTranslationX } from '@/utils/handleTranslationX.js';

const PrototypesLine = ({
  prototypes,
  baseVelocity = 100,
  height = 400,
  changeDirection = true
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);
  handleTranslationX(baseX, baseVelocity, changeDirection);

  //// COMPONENT
  return (
    <motion.div className={styles.prototypes_line} style={{ x }}>
      {prototypes.map((prototype, index) => {
        return (
          <div
            key={index}
            className={styles.prototypes_line__box}
            style={{ height: `${prototype?.heightFactor * height}px` }}>
            <video muted autoPlay loop src={`/videos/video-${prototype?.id}.mp4`} />
            {/*             <Image
              src={`/videos/video-${prototype.id}.mp4`}
              alt={`${prototype.name}'s image.`}
              width={500}
              height={prototype.heightFactor * height}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            /> */}
          </div>
        );
      })}
    </motion.div>
  );
};

export default PrototypesLine;
