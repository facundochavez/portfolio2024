import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeLayout.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import { motion } from 'framer-motion';

const YoutubeLayout = () => {
  const { viewportWidth } = useIsMobile();
  const [tailLength, setTailLength] = useState(0);
  const topTextRef = useRef();
  const bottomContainerRef = useRef();

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextRef.current.getBoundingClientRect();
      const bottomContainerRect =
        bottomContainerRef.current.getBoundingClientRect();

      const extraTailLength = window.innerWidth < 820 ? 15 : 35;
      const newTailLength =
        bottomContainerRect.top - topTextRect.bottom + extraTailLength;
      setTailLength(newTailLength);
    };
    handleTailLength();
    addEventListener('resize', handleTailLength);

    return () => {
      removeEventListener('resize', handleTailLength);
    };
  }, []);

  //// COMPONENT
  return (
    <div className={styles.youtube}>
      <div className={styles.youtube__top_container}>
        <motion.div
          className={styles.youtube__top_container__top_text}
          ref={topTextRef}
        >
          <TextBox
            milestone={milestones.find(
              (milestone) => milestone.id === 'youtube'
            )}
            tailLength={tailLength}
          />
        </motion.div>
        <div className={styles.youtube__top_container__mo_channel}>
          <a href='https://www.youtube.com/marcaoptimizada' target='_blank'>
            <motion.div
              className={styles.youtube__top_container__mo_channel__video}
            >
              <video muted autoPlay loop src='/videos/video-mo-channel.webm' />
            </motion.div>
          </a>
        </div>
      </div>
      <motion.div
        className={styles.youtube__mo_website}
        ref={bottomContainerRef}
      >
        <div className={styles.youtube__mo_website__video}>
          {viewportWidth < 400 ? (
            <video muted autoPlay src='/videos/video-mo-website-mobile.webm' />
          ) : viewportWidth < 650 ? (
            <video muted autoPlay src='/videos/video-mo-website-tablet.webm' />
          ) : (
            <video muted autoPlay src='/videos/video-mo-website-desktop.webm' />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default YoutubeLayout;
