import BackendVideo from '@/pages/contents/BackendVideo.content/BackendVideo.content';
import MilestoneSection from '../Milestone.section/Milestone.section';
import styles from './Closing.section.module.scss';
import milestones from '@/data/milestones.data.json';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const ClosingSection = () => {
  const { viewportWidth, viewportHeight, isMobile } = useIsMobile();

  const milestoneRef = useRef();
  const [subcontainerHeight, setSetsubcontainerHeight] = useState(0);
  const [subcontainerTop, setSetsubcontainerTop] = useState(0);

  const closingSectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: closingSectionRef,
    offset: ['start start', 'end end']
  });

  const animationStart = -0.00078125 * viewportHeight + 0.8025;
  const subcontainerTranslationX = useTransform(scrollYProgress, [Math.max(0, animationStart), 0.85], ['0%', '-50%']);

  // PATH INITIAL VALUES
  const [horizontalLineWidth, setHorizontalLineWidth] = useState(0);
  const [horizontalLineHeight, setHorizontalLineHeight] = useState(0);
  const [phraseBoxWidth, setPhraseBoxWidth] = useState(0);
  const [phraseBoxHeight, setPhraseBoxHeight] = useState(0);

  // PATH DRAW
  const A = horizontalLineWidth;
  const B = horizontalLineHeight;
  const C = phraseBoxWidth;
  const D = phraseBoxHeight;

  const horizontalLine = `M${-A + 2} ${D - B} v${B - 10} a10 10 0 0 0 10 10  h${A + 1}`;
  const phraseRectangle = `M12 ${D} h${C - 22} a10 10 0 0 0 10 -10 v${
    -D + 22
  } a10 10 0 0 0 -10 -10 h${-C + 22} a10 10 0 0 0 -10 10 v${D - 22} a10 10 0 0 0 10 10`;

  // PATH ANIMATION
  const horizontalPathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const horizontalPathOffset = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  const phrasePathLength = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  useEffect(() => {
    const handleSubcontainerHeight = () => {
      const milestoneHeight = milestoneRef.current.clientHeight;
      const newSubcontainerHeight = Math.max(window.innerHeight * 1.1, milestoneHeight + 130);
      const newSubcontainerTop = window.innerHeight - newSubcontainerHeight;
      setSetsubcontainerHeight(newSubcontainerHeight);
      setSetsubcontainerTop(newSubcontainerTop);
    };
    handleSubcontainerHeight();

    const handlePathSizes = () => {
      const phraseBox = document.querySelector(
        `.${styles.closing__subcontainer__right__phrase_box}`
      );
      setPhraseBoxWidth(phraseBox.clientWidth);
      setPhraseBoxHeight(phraseBox.clientHeight);

      const bottomContainer = document.querySelector(
        `.${styles.closing__subcontainer__left__bottom}`
      );
      const newHorizontalLineWidth =
        phraseBox.getBoundingClientRect().left - bottomContainer.getBoundingClientRect().left;
      setHorizontalLineWidth(newHorizontalLineWidth - (isMobile ? 0 : 0.5));
      setHorizontalLineHeight(bottomContainer.clientHeight + 2);
    };
    setTimeout(() => {
      handlePathSizes();
    }, 1000);
  }, [viewportWidth]);

  //// COMPONENT
  return (
    <div className={styles.closing} ref={closingSectionRef}>
      <motion.div
        className={styles.closing__subcontainer}
        style={{ x: subcontainerTranslationX, height: subcontainerHeight, top: subcontainerTop }}>
        <div className={styles.closing__subcontainer__left}>
          <MilestoneSection
            milestoneRef={milestoneRef}
            milestone={milestones.find((milestone) => milestone.id === 'back-end')}
            content={<BackendVideo />}
          />
          <section style={{ height: '100%', paddingTop: '0', paddingBottom: '7.5vh' }}>
            <div className={styles.closing__subcontainer__left__bottom} />
          </section>
        </div>
        <section style={{ paddingBottom: '7.5vh', paddingTop: '7.5vh', height: '100vh' }}>
          <div className={styles.closing__subcontainer__right}>
            <div className={styles.closing__subcontainer__right__contact_box_container} />
            <div className={styles.closing__subcontainer__right__phrase_box}>
              {viewportWidth < 370 ? (
                <p>
                  After all,
                  <br />
                  I love solving problems
                  <br />
                  with design and code.
                  <br />
                  So, why don't we talk?
                </p>
              ) : (
                <p>
                  After all, I love solving problems
                  <br />
                  with design and code. So, why
                  <br />
                  don't we talk?
                </p>
              )}

              <svg xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='horizontalLineTwoGradient'>
                    <stop offset='0%' stopColor='var(--color-1)' />
                    <stop offset='50%' stopColor='var(--color-2)' />
                    <stop offset='100%' stopColor='var(--color-3)' />
                  </linearGradient>
                  <linearGradient id='phraseTwoGradient'>
                    <stop offset='0%' stopColor='var(--color-3)' />
                    <stop offset='100%' stopColor='var(--color-4)' />
                  </linearGradient>
                </defs>
                <motion.path
                  pathOffset={horizontalPathOffset}
                  pathLength={horizontalPathLength}
                  d={horizontalLine}
                  stroke='url(#horizontalLineTwoGradient)'
                  strokeWidth='4'
                  fill='none'
                />
                <motion.path
                  pathLength={phrasePathLength}
                  d={phraseRectangle}
                  stroke='url(#phraseTwoGradient)'
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

export default ClosingSection;
