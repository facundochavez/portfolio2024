import styles from './BackendVideo.content.module.scss';

const BackendVideo = () => {
  //// COMPONENT
  return (
    <div className={styles.backend_video}>
      <a href='http://www.petpath.app' target='_blank'>
        <div className={styles.backend_video__wrapper}>
          <video muted autoPlay loop src='/videos/video-petpath.mp4' />
        </div>
      </a>
    </div>
  );
};

export default BackendVideo;
