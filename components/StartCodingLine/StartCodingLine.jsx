import { useEffect, useRef, useState } from 'react';
import styles from './StartCodingLine.module.scss';
import {
  TheAtriumSectionsOneAndTwo,
  TheAtriumSectionsTwoAndThree,
  TheAtriumSectionsFourAndFive,
  TheAtriumSectionsSixAndSeven
} from '../TheAtrium/TheAtrium';

const StartCodingLineDesktop = ({ index }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  const [leftContainerWidth, setLeftContainerWidth] = useState(0);
  const [rightContainerWidth, setRightContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const left = leftRef.current;
      const right = rightRef.current;
      setLeftContainerWidth(left.offsetWidth);
      setRightContainerWidth(right.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleResize);
    };
  }, []);

  //// COMPONENT
  return (
    <div
      className={styles.start_coding_line}
      style={{ flexDirection: index === 1 ? 'row' : 'row-reverse' }}>
      <div className={styles.start_coding_line__left_container} ref={leftRef}>
        {index === 1 ? (
          <TheAtriumSectionsOneAndTwo fatherWidth={leftContainerWidth} scale={0.5} />
        ) : (
          <TheAtriumSectionsSixAndSeven fatherWidth={leftContainerWidth} scale={0.5} />
          )}
      </div>
      <div className={styles.start_coding_line__right_container} ref={rightRef}>
        {index === 1 ? (
          <TheAtriumSectionsTwoAndThree fatherWidth={rightContainerWidth} scale={0.5} />
          ) : (
          <TheAtriumSectionsFourAndFive fatherWidth={rightContainerWidth} scale={0.5} />
        )}
      </div>
    </div>
  );
};
const StartCodingLineMobile = () => {
  //// COMPONENT
  return <div className={styles.start_coding_line}></div>;
};

export { StartCodingLineDesktop, StartCodingLineMobile };
