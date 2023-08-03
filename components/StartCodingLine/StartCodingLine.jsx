import { useEffect, useRef, useState } from 'react';
import styles from './StartCodingLine.module.scss';
import {
  TheAtriumSectionsOneAndTwo,
  TheAtriumSectionsTwoAndThree,
  TheAtriumSectionsFourAndFive,
  TheAtriumSectionsSixAndSeven
} from '../TheAtrium/TheAtrium';
import { motion, useScroll } from 'framer-motion';

const StartCodingLineDesktop = ({ index }) => {
  const lineRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const [leftContainerWidth, setLeftContainerWidth] = useState(0);
  const [rightContainerWidth, setRightContainerWidth] = useState(0);
  const [alignment, setAlignment] = useState('left');
  const { scrollY } = useScroll();

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
  }, [alignment, scrollY]);

  const theAtriumLeftContent = [
    <TheAtriumSectionsOneAndTwo fatherWidth={leftContainerWidth} scale={0.5} />,
    <TheAtriumSectionsSixAndSeven fatherWidth={leftContainerWidth} scale={0.5} />
  ];

  const theAtriumRightContent = [
    <TheAtriumSectionsTwoAndThree fatherWidth={rightContainerWidth} scale={0.5} />,
    <TheAtriumSectionsFourAndFive fatherWidth={rightContainerWidth} scale={0.5} />
  ];

  //// COMPONENT
  return (
    <div
      className={styles.start_coding_line_desktop}
      ref={lineRef}
      style={{ flexDirection: index === 0 ? 'row' : 'row-reverse' }}>
      <div
        className={styles.start_coding_line_desktop__left_container}
        ref={leftRef}
        >
        {/* {theAtriumLeftContent[index]} */}
      </div>
      <div
        className={styles.start_coding_line_desktop__right_container}
        ref={rightRef}
>
     {/*    {theAtriumRightContent[index]} */}
      </div>
    </div>
  );
};

const StartCodingLineMobile = ({ index }) => {
  const lineRef = useRef();
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      setContainerWidth(container.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleResize);
    };
  }, []);

  const theAtriumContent = [
    <TheAtriumSectionsOneAndTwo fatherWidth={containerWidth} scale={0.3} />,
    <TheAtriumSectionsFourAndFive fatherWidth={containerWidth} scale={0.3} />,
    <TheAtriumSectionsSixAndSeven fatherWidth={containerWidth} scale={0.3} />
  ];

  //// COMPONENT
  return (
    <div className={styles.start_coding_line_mobile} style={{ height: '216px' }}>
      <div
        className={styles.start_coding_line_mobile__container}
        ref={containerRef}
        style={index === 1 ? { justifyContent: 'flex-end' } : null}>
   {/*      {theAtriumContent[index]} */}
      </div>
    </div>
  );
};

export { StartCodingLineDesktop, StartCodingLineMobile };
