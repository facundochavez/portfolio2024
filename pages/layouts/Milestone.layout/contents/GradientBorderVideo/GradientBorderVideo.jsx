import styles from './GradientBorderVideo.module.scss';
import useIsMobile from '@/hooks/useIsMobile';

const GradientBorderVideo = () => {
  const { viewportWidth } = useIsMobile();

  //// COMPONENT
  return (
    <div className={styles.gradient_border_video}>
      <a href='https://gradientborder.vercel.app/' target='_blank'>
        <div className={styles.gradient_border_video__wrapper}>
          {viewportWidth < 500 ? (
            <video
              muted
              autoPlay
              loop
              src='/videos/video-gradientborder-mobile.webm'
            />
          ) : viewportWidth < 840 ? (
            <video
              muted
              autoPlay
              loop
              src='/videos/video-gradientborder-tablet.webm'
            />
          ) : (
            <video
              muted
              autoPlay
              loop
              src='/videos/video-gradientborder-desktop.webm'
            />
          )}
        </div>
      </a>
    </div>
  );
};

export default GradientBorderVideo;
