import Image from 'next/image';
import styles from './ScrollToTopButton.module.scss';
import { useGlobalContext } from '@/context/global.context';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const { scrollToTopBtnShow, scrollToTopBtnDirection, scrollToTop } = useGlobalContext();

//// COMPONENT
return (
  <AnimatePresence>
    {scrollToTopBtnShow && (
      <motion.div
        className={styles.scroll_to_top_button}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: '100px' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100px' }}
        transition={{
          type: 'spring',
          mass: 0.2
        }}>
        <Image
          src='/icons/icon-arrow.svg'
          fill
          alt='arrow'
          style={{
            rotate: `${scrollToTopBtnDirection === 'left' ? -90 : 0}deg`,
            transition: 'all 0.2s'
          }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);
};

export default ScrollToTopButton;
