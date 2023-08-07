import React, { useEffect, useRef, useState } from 'react';
import styles from './RevealTitle.module.scss';
import Reveal from '../Reveal/Reveal';
import { useGlobalContext } from '@/context/global.context';

const RevealTitle = ({ title, isOnce = false }) => {
  const { lenguage } = useGlobalContext();
  const words = title.split(' ');
  const [delays, setDelays] = useState([]);
  const fatherRef = useRef(null);
  const spanRefs = useRef([]);

  useEffect(() => {
    const handleDelays = () => {
      const fatherTop = fatherRef.current.getBoundingClientRect().top;
      const calculatedDelays = spanRefs.current.map((spanRef) => {
        const spanTop = spanRef.getBoundingClientRect().top;
        const delay = 0.2 + (spanTop - fatherTop) * 0.002;
        return delay;
      });
      setDelays(calculatedDelays);
    };
    handleDelays();
    window.addEventListener('resize', handleDelays);
    return () => {
      window.removeEventListener('resize', handleDelays);
    };
  }, []);

  return (
    <div className={styles.reveal_title} ref={fatherRef}>
      <h3>
        {words.map((word, index) => (
          <Reveal key={index} delay={lenguage === 'en' ? delays[index] : 0.2}>
            <span ref={(el) => (spanRefs.current[index] = el)}>{word}&nbsp;</span>
          </Reveal>
        ))}
      </h3>
    </div>
  );
};

export default RevealTitle;
