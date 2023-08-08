import { useEffect, useRef, useState } from 'react';
import styles from './TextBox.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useGlobalContext } from '@/context/global.context';
import useIsMobile from '@/hooks/useIsMobile';

const TextBox = ({ milestone, tailLength = 78 }) => {
  const { viewportWidth } = useIsMobile();
  const { lenguage } = useGlobalContext();
  const marginRight = milestone.topTextMarginRight || 0;
  const boxRef = useRef();
  const isInView = useInView(boxRef, { once: true });
  const mainControls = useAnimation();
  const pathControls = useAnimation();
  

  useEffect(() => {
    if (isInView) {
      mainControls.start('textVisible');
      pathControls.start('pathVisible');
    } else {
      mainControls.start('textHidden');
      pathControls.start('pathHidden');
    }
  }, [isInView]);

  //// COMPONENT
  return (
    <div
      className={styles.text_box}
      style={{
        right:
          milestone.id === 'start-coding'
            ? viewportWidth < 900
              ? '18px'
              : '43px'
            : `${marginRight}px`,
        paddingLeft: milestone.id === 'start-coding' ? '0px' : null
      }}
      ref={boxRef}>
      <motion.p
        variants={{ textHidden: { opacity: 0 }, textVisible: { opacity: 1 } }}
        initial='textHidden'
        animate={mainControls}
        transition={{ delay: 0.65, duration: 0.5 }}>
        {lenguage === 'en' ? milestone.topTextEn : milestone.topTextEs}
      </motion.p>
      <div
        className={styles.text_box__path}
        style={{ height: milestone.id === 'brands' ? 'calc(100% + 100px)' : `calc(100% + ${tailLength}px)` }}>
        <motion.div
          className={styles.text_box__path__wrapper}
          variants={{
            pathHidden: { height: '0%', marginTop: '-10px' },
            pathVisible: { height: '100%', marginTop: '0px' }
          }}
          initial='pathHidden'
          animate={pathControls}
          transition={{ delay: 0.55, duration: 0.5 }}>
          <div className={styles.text_box__path__wrapper__line}></div>
          <div className={styles.text_box__path__wrapper__circle}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextBox;
