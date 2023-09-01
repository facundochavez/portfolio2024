import { useEffect, useRef } from 'react';
import styles from './Reveal.module.scss';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, delay = 0, once = true, fromTop = false }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  //// COMPONENT
  return (
    <motion.div ref={ref} className={styles.reveal}>
      <motion.div
        className={styles.reveal__wrapper}
        variants={{ hidden: { y: fromTop? '-100%' : '100%' }, visible: { y: 0 } }}
        initial='hidden'
        animate={mainControls}
        exit='hidden'
        transition={{ delay: delay, type: 'spring', mass: 0.2, duration: 0.5 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Reveal;
