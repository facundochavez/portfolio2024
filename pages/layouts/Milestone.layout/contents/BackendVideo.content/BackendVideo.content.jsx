import styles from "./BackendVideo.content.module.scss";

const BackendVideo = () => {
  
  //// COMPONENT
  return (
    <div className={styles.backend_video}>
      <div className={styles.backend_video__wrapper}>
      <video muted autoPlay loop src='/videos/video-petpath.mp4' />
      </div>
    </div>
  );
};

export default BackendVideo;
