import styles from './HeroSection.module.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  // HORIZONTAL SCROLLING
  const heroSectionRef = useRef();
  const { scrollYProgress: scrollYProgressStart } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end end']
  });
  const { scrollYProgress: scrollYProgressEnd } = useScroll({
    target: heroSectionRef,
    offset: ['end end', 'end start']
  });

  const subcontainerTranslationX = useTransform(scrollYProgressStart, [0.1, 0.4, 0.6], ['0%', '-35%', '-50%']);
/*   const subcontainerTranslationY = useTransform(scrollYProgressStart, [0, 1], ['0%', '100%']);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const subcontainerTranslationX = useSpring(transform, physics); */

  // PATH INITIAL VALUES
  const [nameBoxWidth, setNameBoxWidth] = useState(280);
  const [nameBoxHeight, setNameBoxHeight] = useState(146);
  const [phraseBoxWidth, setPhraseBoxWidth] = useState(291);
  const [phraseBoxHeight, setPhraseBoxHeight] = useState(80);
  const [horizontalLineLength, setHorizontalLineLength] = useState(0);
  const [verticalLineLength, setVerticalLineLength] = useState(150);

  // PATH DRAW
  const A = nameBoxWidth;
  const B = nameBoxHeight;
  const C = phraseBoxWidth;
  const D = phraseBoxHeight;

  const nameRectangle = `M${A - 10} ${B} h${-A + 22} a10 10 0 0 1 -10 -10 v${
    -B + 22
  } a10 10 0 0 1 10 -10 h${A - 22} a10 10 0 0 1 10 10 v${B - 22} a10 10 0 0 1 -10 10`;
  const phraseRectangleOne = `M12 ${D} h${C - 22} a10 10 0 0 0 10 -10 v${
    -D + 22
  } a10 10 0 0 0 -10 -10 h${-C + 22} a10 10 0 0 0 -10 10 v${D - 22} a10 10 0 0 0 10 10`;

  const phraseRectangleTwo = `M2 ${D - 10} a10 10 0 0 0 10 10 h${C - 22} a10 10 0 0 0 10 -10 v${
    -D + 22
  } a10 10 0 0 0 -10 -10 h${-C + 22} a10 10 0 0 0 -10 10 v${D - 22} `;

  const [isInitialStretch, setIsInitialStretch] = useState(true);
  const phraseRectangle = isInitialStretch ? phraseRectangleOne : phraseRectangleTwo;

  const horizontalLine = `M${A - 11} ${B} h${horizontalLineLength} v0.001`;
  const verticalLine = `M2 ${D - 12}  v${verticalLineLength} h0.001`;

  // PATH ANIMATION
  const namePathLength = useTransform(scrollYProgressStart, [0, 0.4], [1, 0]);

  const horizontalPathLength = useTransform(scrollYProgressStart, [0, 0.25], [0, 1]);
  const horizontalPathOffset = useTransform(scrollYProgressStart, [0.4, 0.6], [0, 1]);

  const phrasePathLength = useTransform(scrollYProgressStart, [0.25, 0.6], [0, 1]);

  const phrasePathOffsetOne = useTransform(scrollYProgressStart, [0.8, 1], [0, 0.5]);
  const phrasePathOffsetTwo = useTransform(scrollYProgressEnd, [0, 0.85], [0.5, 1]);
  const [isFinalStretch, setIsFinalStretch] = useState(false);
  const phrasePathOffset = isFinalStretch ? phrasePathOffsetTwo : phrasePathOffsetOne;

  const verticalPathLength = useTransform(scrollYProgressStart, [0.8, 1], [0, 1]);

  //  RESPONSIVE CHANGES
  useEffect(() => {
    const handlePath = () => {
      const subcontainer = document.querySelector(`.${styles.hero__subcontainer}`);
      const nameBox = document.querySelector(`.${styles.hero__subcontainer__left__name_box}`);
      const phraseBox = document.querySelector(`.${styles.hero__subcontainer__right__phrase_box}`);
      const subcontainerRect = subcontainer.getBoundingClientRect();
      const nameBoxRect = nameBox.getBoundingClientRect();
      const phraseBoxRect = phraseBox.getBoundingClientRect();

      const newHorizontalLength = phraseBoxRect.left - nameBoxRect.right + 25;
      const newVerticalLineLength = subcontainerRect.bottom - phraseBoxRect.bottom + 13;
      setHorizontalLineLength(newHorizontalLength);
      setVerticalLineLength(newVerticalLineLength);

      if (window.innerWidth < 635) {
        setNameBoxWidth(280);
        setNameBoxHeight(146);
        setPhraseBoxWidth(291);
        setPhraseBoxHeight(80);
      } else if (window.innerWidth < 900) {
        setNameBoxWidth(506);
        setNameBoxHeight(91);
        setPhraseBoxWidth(291);
        setPhraseBoxHeight(80);
      } else {
        setNameBoxWidth(716);
        setNameBoxHeight(131);
        setPhraseBoxWidth(387);
        setPhraseBoxHeight(116);
      }
      handlePhraseRectangle();
    };

    const handlePhraseRectangle = () => {
      if (scrollYProgressStart.current <= 0.65) {
        setIsInitialStretch(true);
      } else {
        setIsInitialStretch(false);
      }

      if (scrollYProgressEnd.current === 0) {
        setIsFinalStretch(false);
      } else {
        setIsFinalStretch(true);
      }
    };

    handlePath();
    handlePhraseRectangle();
    window.addEventListener('resize', handlePath);
    window.addEventListener('scroll', handlePhraseRectangle);

    return () => {
      window.removeEventListener('resize', handlePath);
      window.removeEventListener('scroll', handlePhraseRectangle);
    };
  }, []);

  // COMPONENT
  return (
    <div ref={heroSectionRef} className={styles.hero} data-scroll-section>
      <motion.div
        className={styles.hero__subcontainer}
        style={{ x: subcontainerTranslationX}}>
        <section>
          <div className={styles.hero__subcontainer__left}>
            <h3>Hi there! I am</h3>

            <div className={styles.hero__subcontainer__left__name_box}>
              <h2>Facundo Chavez</h2>
              <svg xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='nameGradient'>
                    <stop offset='0%' stopColor='var(--color-1)' />
                    <stop offset='100%' stopColor='var(--color-2)' />
                  </linearGradient>
                  <linearGradient id='horizontalLineGradient'>
                    <stop offset='0%' stopColor='var(--color-2)' />
                    <stop offset='100%' stopColor='var(--color-3)' />
                  </linearGradient>
                </defs>
                <motion.path
                  pathLength={namePathLength}
                  d={nameRectangle}
                  stroke='url(#nameGradient)'
                  strokeWidth='4'
                  fill='none'
                />
                <motion.path
                  pathOffset={horizontalPathOffset}
                  pathLength={horizontalPathLength}
                  d={horizontalLine}
                  stroke='url(#horizontalLineGradient)'
                  strokeWidth='4'
                  fill='none'
                />
              </svg>
            </div>

            <div className={styles.hero__subcontainer__left__titles_container}>
              <div className={styles.hero__subcontainer__left__titles_container__titles}>
                <h1>
                  Front-end developer
                  <br />
                  UX/UI designer<br />
                  Brand consultant
                </h1>
              </div>
              <div className={styles.hero__subcontainer__left__titles_container__photo}>
                <Image src={'/images/portrait.png'} alt='facundo_chavez_portrait' fill />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.hero__subcontainer__right}>
            <div className={styles.hero__subcontainer__right__phrase_box}>
              <p>
                Actually, I’m a civil engineer
                <br />
                who one day wanted to...
              </p>
              <svg xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='phraseGradient'>
                    <stop offset='0%' stopColor='var(--color-3)' />
                    <stop offset='100%' stopColor='var(--color-4)' />
                  </linearGradient>
                  <linearGradient id='verticalLineGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='var(--color-3)' />
                    <stop offset='100%' stopColor='var(--color-5)' />
                  </linearGradient>
                </defs>
                <motion.path
                  pathLength={phrasePathLength}
                  pathOffset={phrasePathOffset}
                  d={phraseRectangle}
                  stroke='url(#phraseGradient)'
                  strokeWidth='4'
                  fill='none'
                />
                <motion.path
                  pathLength={verticalPathLength}
                  d={verticalLine}
                  stroke='url(#verticalLineGradient)'
                  strokeWidth='4'
                  fill='none'
                />
              </svg>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default HeroSection;
