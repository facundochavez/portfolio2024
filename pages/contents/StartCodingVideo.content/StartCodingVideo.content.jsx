import {
  StartCodingLineDesktop,
  StartCodingLineMobile
} from '@/components/StartCodingLine/StartCodingLine';
import styles from './StartCodingVideo.content.module.scss';
import useIsMobile from '@/hooks/useIsMobile';

const StartCodingVideo = () => {
  const {isMobile, viewportWidth} = useIsMobile();


  //// COMPONENT
  return (
    <div className={styles.start_coding}>
      <div className={styles.start_coding__container} />
{/*       {viewportWidth < 600 ? (
        <>
          <StartCodingLineMobile index={0} />
          <StartCodingLineMobile index={1} />
          <StartCodingLineMobile index={2} />
        </>
      ) : (
        <>
          <StartCodingLineDesktop index={0}/>
          <StartCodingLineDesktop index={1}/>
        </>
      )} */}
    </div>
  );
};

export default StartCodingVideo;
