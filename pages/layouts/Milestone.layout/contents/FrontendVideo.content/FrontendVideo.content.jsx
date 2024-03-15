import styles from "./FrontendVideo.content.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

const FrontendVideo = () => {
  const { viewportWidth } = useIsMobile();
  //// COMPONENT
  return (
    <div className={styles.frontend_video}>
      <div className={styles.frontend_video__wrapper}>
        {
          viewportWidth < 500
            ? <video muted autoPlay loop src='/videos/video-infodevs-mobile.webm' />
            : viewportWidth < 840
              ? <video muted autoPlay loop src='/videos/video-infodevs-tablet.webm' />
              : <video muted autoPlay loop src='/videos/video-infodevs-desktop.webm' />
        }
      </div>
    </div>
  );
};

export default FrontendVideo;
