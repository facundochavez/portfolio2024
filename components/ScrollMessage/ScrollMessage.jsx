import { AnimatePresence, motion } from 'framer-motion';
import styles from './ScrollMessage.module.scss';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState } from 'react';

const ScrollMessage = () => {
  const { isMobile } = useIsMobile();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    };

    const stopInerval = () => {
      setShowMessage(false);
      clearInterval(interval);
    };

    const interval = setInterval(scrollHandler, 8000);
    window.addEventListener('scroll', stopInerval);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', stopInerval);
    };
  }, []);

  //// COMPONENT
  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className={styles.scroll_message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div className={styles.scroll_message__content}>
            <p>Scroll to go</p>
            {isMobile ? <DraggingTap /> : <ScrollingMouse />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollingMouse = () => {
  return (
    <div className={styles.scrolling_mouse}>
      <div className={styles.scrolling_mouse__wheel} />
    </div>
  );
};

const DraggingTap = () => {
  return (
    <div className={styles.dragging_tap}>
      <div className={styles.dragging_tap__tap} />
    </div>
  );
};

export default ScrollMessage;
