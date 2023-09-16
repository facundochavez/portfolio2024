import styles from './BackendVideo.content.module.scss';

const BackendVideo = () => {
  //// COMPONENT
  return (
    <div className={styles.backend_video}>
      <a href='https://petpath.vercel.app/' target='_blank'>
        <div className={styles.backend_video__wrapper}>
          <video muted autoPlay loop src='/videos/video-petpath.mp4' />
        </div>
      </a>
    </div>
  );
};

export default BackendVideo;
