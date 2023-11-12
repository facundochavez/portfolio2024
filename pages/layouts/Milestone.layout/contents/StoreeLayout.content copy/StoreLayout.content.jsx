import TextBox from '@/components/TextBox/TextBox';
import styles from './StoreLayout.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import { motion } from 'framer-motion';

const StoreLayout = () => {
  const { viewportWidth } = useIsMobile();
  const [tailLength, setTailLength] = useState(0);
  const topTextStoreRef = useRef();
  const bottomContainerStoreRef = useRef();

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextStoreRef.current.getBoundingClientRect();
      const bottomContainerRect = bottomContainerStoreRef.current.getBoundingClientRect();

      const extraTailLength = window.innerWidth < 820 ? 15 : 30;
      const newTailLength = bottomContainerRect.top - topTextRect.bottom + extraTailLength;
      setTailLength(newTailLength);
    };
    setTimeout(() => {
      handleTailLength();
    }, 100)
    addEventListener('resize', handleTailLength);

    return () => {
      removeEventListener('resize', handleTailLength);
    };
  }, []);

  //// COMPONENT
  return (
    <div className={styles.store}>
      <div className={styles.store__top_container}>
        <motion.div
          className={styles.store__top_container__top_text}
          ref={topTextStoreRef}
        >
          <TextBox
            milestone={milestones.find((milestone) => milestone.id === 'store')}
            tailLength={tailLength}
          />
        </motion.div>
        <div className={styles.store__top_container__three_words_mug}>
          <a href='https://threewordsmug.com//' target='_blank'>
            <motion.div
              className={styles.store__top_container__three_words_mug__video}
            >
              <video muted autoPlay loop src='/videos/video-twm-marketing.mp4' />
            </motion.div>
          </a>
        </div>
      </div>
      <motion.div className={styles.store__twm_website} ref={bottomContainerStoreRef}>
        <a href='http://www.threewordsmug.com' target='_blank'>
          <div className={styles.store__twm_website__video}>
            {viewportWidth < 400 ? (
              <video muted autoPlay src='/videos/video-twm-mobile.mp4' />
            ) : viewportWidth < 650 ? (
              <video muted autoPlay src='/videos/video-twm-tablet.mp4' />
            ) : (
              <video muted autoPlay src='/videos/video-twm-desktop.mp4' />
            )}
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default StoreLayout;
