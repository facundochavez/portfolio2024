import { useEffect, useRef, useState } from 'react';
import styles from './TextBox.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';

const TextBox = ({ milestone, tailLength = 90 }) => {
  const marginRight = milestone.topTextMarginRight || 0;
  const [pathMarginTop, setPathMarginTop] = useState(0);
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

  useEffect(() => {
    const handlePathMarginTop = () => {
      const box = boxRef.current;
      const newMargin = Math.min(
        0,

        -box.getBoundingClientRect().top + window.innerHeight / 3 + box.clientHeight
      );
      setPathMarginTop(newMargin);
      milestone.id === 'brands' && console.log(newMargin);
    };

    handlePathMarginTop();

    window.addEventListener('scroll', handlePathMarginTop);
    return () => {
      window.removeEventListener('scroll', handlePathMarginTop);
    };
  });

  //// COMPONENT
  return (
    <div className={styles.text_box} style={{ marginRight: `${marginRight}px` }} ref={boxRef}>
      <motion.p
        variants={{ textHidden: { opacity: 0 }, textVisible: { opacity: 1 } }}
        initial='textHidden'
        animate={mainControls}
        transition={{ delay: 0.5, duration: 0.5 }}>
        {milestone.topText}
      </motion.p>
      <div className={styles.text_box__path} style={{ height: `calc(100% + ${tailLength}px)` }}>
        <motion.div
          className={styles.text_box__path__wrapper}
          variants={{
            pathHidden: { height: '0%', marginTop: '-10px' },
            pathVisible: { height: '100%', marginTop: '0px' }
          }}
          initial='pathHidden'
          animate={pathControls}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <div className={styles.text_box__path__wrapper__line}></div>
          <div className={styles.text_box__path__wrapper__circle}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextBox;
