import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeParallax.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';
import { motion, useScroll, useTransform } from 'framer-motion';

const YoutubeParallax = () => {
  const { viewportWidth } = useIsMobile();
  const parallaxRef = useRef();
  const [tailLength, setTailLength] = useState(0);
  const topTextRef = useRef();
  const bottomContainerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start']
  });

  const videoTranslationY = useTransform(
    scrollYProgress,
    [0, 1],
    viewportWidth < 500 ? [0, 0] : viewportWidth < 820 ? [-40, 40] : [-80, 80]
  );
  const topTextTranslationY = useTransform(
    scrollYProgress,
    [0, 1],
    viewportWidth < 820 ? [0, 0] : [30, -30]
  );

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextRef.current.getBoundingClientRect();
      const bottomContainerRect = bottomContainerRef.current.getBoundingClientRect();

      const extraTailLength = window.innerWidth < 820 ? 15 : 35;
      const newTailLength = bottomContainerRect.top - topTextRect.bottom + extraTailLength;
      setTailLength(newTailLength);
    };
    handleTailLength();
    addEventListener('resize', handleTailLength);

    const parallax = parallaxRef.current;

    const handleParallaxRotation = (event, element) => {
      const { clientX, clientY } = event;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      const offsetX = (clientX - middleX) / middleX;
      const offsetY = (clientY - middleY) / middleY;
      const rotateX = offsetY * -8;
      const rotateY = offsetX * 8;

      element.style.setProperty('--rotateX', rotateX + 'deg');
      element.style.setProperty('--rotateY', rotateY + 'deg');
    };
    addEventListener('mousemove', (e) => handleParallaxRotation(e, parallax));

    return () => {
      removeEventListener('resize', handleTailLength);
      removeEventListener('mousemove', handleParallaxRotation);
    };
  }, []);

  //// COMPONENT
  return (
    <div className={styles.youtube_parallax} ref={parallaxRef}>
      <div className={styles.youtube_parallax__top_container}>
        <motion.div
          className={styles.youtube_parallax__top_container__top_text}
          ref={topTextRef}
          style={{ y: topTextTranslationY }}>
          <TextBox
            milestone={milestones.find((milestone) => milestone.id === 'youtube')}
            tailLength={tailLength}
          />
        </motion.div>
        <div className={styles.youtube_parallax__top_container__mo_channel}>
          <motion.div
            className={styles.youtube_parallax__top_container__mo_channel__video}
            style={{
              y: videoTranslationY
            }}>
            <video muted autoPlay loop src='/videos/video-mo-channel.mp4' />
          </motion.div>
        </div>
      </div>
      <div className={styles.youtube_parallax__mo_website} ref={bottomContainerRef}>
        <div className={styles.youtube_parallax__mo_website__video}>
          {viewportWidth < 400 ? (
            <video muted loop src='/videos/video-mo-website-mobile.mp4' />
          ) : viewportWidth < 650 ? (
            <video muted loop src='/videos/video-mo-website-tablet.mp4' />
          ) : (
            <video muted loop src='/videos/video-mo-website-desktop.mp4' />
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeParallax;
