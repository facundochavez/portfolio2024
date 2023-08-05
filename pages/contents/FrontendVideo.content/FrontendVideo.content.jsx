import styles from "./FrontendVideo.content.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

const FrontendVideo = () => {
  const { viewportWidth } = useIsMobile();
  //// COMPONENT
  return (
    <div className={styles.frontend_video}>
      <div className={styles.frontend_video__wrapper}>
        {
          viewportWidth < 430
            ? <video muted autoPlay loop src='/videos/video-infodevs-mobile.mp4' />
            : viewportWidth < 840
              ? <video muted autoPlay loop src='/videos/video-infodevs-tablet.mp4' />
              : <video muted autoPlay loop src='/videos/video-infodevs-desktop.mp4' />
        }
      </div>
    </div>
  );
};

export default FrontendVideo;
