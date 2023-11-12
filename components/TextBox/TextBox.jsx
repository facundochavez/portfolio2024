import { useEffect, useRef } from 'react';
import styles from './TextBox.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';
import { texts } from '@/pages/layouts/Milestone.layout/texts/Texts/Texts';

const TextBox = ({ milestone, tailLength, controls }) => {
  const { viewportWidth } = useIsMobile();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            : `${marginRight}px`
      }}
      ref={boxRef}>
      <motion.div
        variants={{ textHidden: { opacity: 0 }, textVisible: { opacity: 1 } }}
        initial='textHidden'
        animate={milestone.id === 'youtube' || milestone.id === 'store' ? mainControls : controls}
        transition={{ delay: viewportWidth < 900 ? 0.15 : 0.25, duration: 1 }}
        style={{
          marginLeft: milestone.id === 'youtube' || milestone.id === 'store' ? (viewportWidth < 820 ? '-9%' : '5%') : '8%'
        }}>
        {texts[milestone.id]?.topText}
      </motion.div>
      <div
        className={styles.text_box__path}
        style={{
          height: `calc(100% + ${tailLength}px)`
        }}>
        <motion.div
          className={styles.text_box__path__wrapper}
          variants={{
            pathHidden: { height: '0%', marginTop: '-10px' },
            pathVisible: { height: '100%', marginTop: '0px' }
          }}
          initial='pathHidden'
          animate={milestone.id === 'youtube' || milestone.id === 'store' ? pathControls : controls}
          transition={{ delay: viewportWidth < 900 ? 0.4 : 0.5, duration: 0.5 }}>
          <div className={styles.text_box__path__wrapper__line}></div>
          <div className={styles.text_box__path__wrapper__circle}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextBox;
