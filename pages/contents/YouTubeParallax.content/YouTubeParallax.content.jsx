import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeParallax.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';

const YoutubeParallax = () => {
  const [tailLength, setTailLength] = useState(0);
  const topTextRef = useRef();
  const bottomContainerRef = useRef();

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextRef.current.getBoundingClientRect();
      const bottomContainerRect = bottomContainerRef.current.getBoundingClientRect();

      const newTailLength = bottomContainerRect.top - topTextRect.bottom + 15;
      console.log(bottomContainerRect.top, topTextRect.bottom);
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
    <div className={styles.youtube_parallax}>
      <div className={styles.youtube_parallax__top_container} >
        <div className={styles.youtube_parallax__top_container__top_text} ref={topTextRef}>
          <TextBox text={milestones.filter((milestone) => milestone.id === 'youtube')[0].topText} tailLength={tailLength} />
        </div>
        <div className={styles.youtube_parallax__top_container__channel_video}>
          <div className={styles.youtube_parallax__top_container__channel_video__video} />
        </div>
      </div>
      <div className={styles.youtube_parallax__bottom_container} ref={bottomContainerRef}>
        <div className={styles.youtube_parallax__bottom_container__website_video} />
      </div>
    </div>
  );
};

export default YoutubeParallax;
