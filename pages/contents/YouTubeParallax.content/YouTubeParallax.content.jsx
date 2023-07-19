import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeParallax.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const YoutubeParallax = () => {
  const [tailLength, setTailLength] = useState(0);
  const topTextRef = useRef();
  const bottomContainerRef = useRef();

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextRef.current.getBoundingClientRect();
      const bottomContainerRect = bottomContainerRef.current.getBoundingClientRect();

      const extraTailLength = window.innerWidth < 820 ? 15 : 25;
      const newTailLength = bottomContainerRect.top - topTextRect.bottom + extraTailLength;
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
      <div className={styles.youtube_parallax__top_container}>
        <div className={styles.youtube_parallax__top_container__top_text} ref={topTextRef}>
          <TextBox
            text={milestones.find((milestone) => milestone.id === 'youtube').topText}
            tailLength={tailLength}
          />
        </div>
        <div className={styles.youtube_parallax__top_container__mo_channel}>
          <div className={styles.youtube_parallax__top_container__mo_channel__video}>
            <Image src={`/videos/image-mo-channel.jpg`} alt={`Marca Optimizada's video.`} fill />
          </div>
        </div>
      </div>
      <div className={styles.youtube_parallax__mo_website} ref={bottomContainerRef}>
        <div className={styles.youtube_parallax__mo_website__image}>
          <Image src={`/videos/image-mo-website.jpg`} alt={`Marca Optimizada's website.`} fill />
        </div>
      </div>
    </div>
  );
};

export default YoutubeParallax;
