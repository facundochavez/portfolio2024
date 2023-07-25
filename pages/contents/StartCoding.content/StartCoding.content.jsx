import {
  StartCodingLineDesktop,
  StartCodingLineMobile
} from '@/components/StartCodingLine/StartCodingLine';
import styles from './StartCoding.content.module.scss';
import { useIsMobile } from '@/pages/hooks/useIsMobile';

const StartCoding = () => {
  const isMobile = useIsMobile();


  //// COMPONENT
  return (
    <div className={styles.start_coding}>
{/*       {isMobile ? (
        <>
          <StartCodingLineMobile index={1} />
          <StartCodingLineMobile index={2} />
          <StartCodingLineMobile index={3} />
        </>
      ) : (
        <> */}
          <StartCodingLineDesktop index={1}/>
          <StartCodingLineDesktop index={2}/>
{/*         </>
      )} */}
    </div>
  );
};

export default StartCoding;
