import styles from './StartCodingVideo.content.module.scss';
import useIsMobile from '@/hooks/useIsMobile';

const StartCodingVideo = () => {
  const { viewportWidth } = useIsMobile();


  //// COMPONENT
  return (
    <div className={styles.start_coding_video}>
      {viewportWidth < 500 ?
        <video muted autoPlay loop src='/videos/video-the-atrium-mobile.webm' />
        :
        <video muted autoPlay loop src='/videos/video-the-atrium-desktop.webm' />
      }
    </div>
  );
};

export default StartCodingVideo;
