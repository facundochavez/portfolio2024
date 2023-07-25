import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeParallax.content.module.scss';
import milestones from '@/data/milestones.data.json';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const YoutubeParallax = () => {
  const parallaxRef = useRef();
  const [tailLength, setTailLength] = useState(0);
  const topTextRef = useRef();
  const bottomContainerRef = useRef();

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
        <div className={styles.youtube_parallax__top_container__top_text} ref={topTextRef}>
          <TextBox
            milestone={milestones.find((milestone) => milestone.id === 'youtube')}
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
