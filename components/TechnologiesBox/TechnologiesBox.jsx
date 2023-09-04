import Image from 'next/image';
import styles from './TechnologiesBox.module.scss';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const TechnologiesBox = ({ milestone }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const iconControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      iconControls.start('iconVisible');
    } else {
      mainControls.start('hidden');
      iconControls.start('iconHidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  //// COMPONENT
  return (
    <motion.div ref={ref} className={styles.technologies_box}>
      <motion.div
        className={styles.technologies_box__background}
        style={{
          backgroundImage: `linear-gradient(130deg, ${milestone?.firstColor} 0%, ${milestone?.secondColor} 150%)`
        }}
        variants={{ hidden: { minWidth: 0 }, visible: { minWidth: '100%' } }}
        initial='hidden'
        animate={mainControls}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: false }}
      />
      {milestone?.technologies?.map((technology, index) => {
        return (
          <div className={styles.technologies_box__technology} key={index}>
            <motion.div
              className={styles.technologies_box__technology__icon}
              variants={{ iconHidden: { opacity: 0 }, iconVisible: { opacity: 1 } }}
              initial='iconHidden'
              animate={iconControls}
              transition={{ delay: 0.35 + index * 0.07 }}
              viewport={{ once: false }}
              style={{
                margin:
                  technology?.id === 'ant-design'
                    ? '0 -2px'
                    : technology?.id === 'sass'
                    ? '0 -3px 0 -3px'
                    : null
              }}>
              <Image
                src={`/icons/technologies/icon-${technology?.id}.svg`}
                alt={`${technology?.name}'s icon.`}
                width={0}
                height={0}
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>
            <h3 className={styles.technologies_box__technology__name}>{technology?.name}</h3>
          </div>
        );
      })}
    </motion.div>
  );
};

export default TechnologiesBox;
