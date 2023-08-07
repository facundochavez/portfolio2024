import BackendVideo from '@/pages/contents/BackendVideo.content/BackendVideo.content';
import MilestoneSection from '../Milestone.section/Milestone.section';
import styles from './Closing.section.module.scss';
import milestones from '@/data/milestones.data.json';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import ContactForm from '@/components/ContactForm/ContactForm';
import { useGlobalContext } from '@/context/global.context';

const ClosingSection = () => {
  const { viewportWidth, viewportHeight, isMobile } = useIsMobile();
  const { lenguage, isContactFormShow, setIsContactFormShow, setClosingBtnDirection } =
    useGlobalContext();

  const milestoneRef = useRef();
  const [subcontainerHeight, setSetsubcontainerHeight] = useState(0);
  const [subcontainerTop, setSetsubcontainerTop] = useState(0);

  const closingSectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: closingSectionRef,
    offset: ['start start', 'end end']
  });

  const animationStart = Math.max(0, -0.000875 * viewportHeight + 0.9875);
  const subcontainerTranslationX = useTransform(
    scrollYProgress,
    [animationStart, (animationStart + 0.85) / 2, 0.85],
    ['0%', '-35%', '-50%']
  );
  const phraseOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);

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
      setPhraseBoxWidth(phraseBox.clientWidth - 2);
      setPhraseBoxHeight(phraseBox.clientHeight - 2);

      const bottomContainer = document.querySelector(
        `.${styles.closing__subcontainer__left__bottom}`
      );
      const newHorizontalLineWidth =
        phraseBox.getBoundingClientRect().left - bottomContainer.getBoundingClientRect().left;
      setHorizontalLineWidth(newHorizontalLineWidth - (isMobile ? 0 : 0.5));
      setHorizontalLineHeight(bottomContainer.clientHeight + 2);
    };
    /*     setTimeout(() => {
          handlePathSizes();
        }, 1000); */
    handlePathSizes();
    window.addEventListener('scroll', handlePathSizes);
    return () => {
      window.removeEventListener('scroll', handlePathSizes);
    };
  }, []);

  // HANDLE CONTACT FORM
  useEffect(() => {
    const handleContactFormShow = () => {
      if (scrollYProgress.current >= 0.9) {
        setIsContactFormShow(true);
      } else {
        setIsContactFormShow(false);
      }
      // CONTEXT MODIFICATIONS
      setClosingBtnDirection(scrollYProgress.current > 0.25 ? 'left' : 'up');
    };

    handleContactFormShow();
    window.addEventListener('scroll', handleContactFormShow);
    return () => {
      window.removeEventListener('scroll', handleContactFormShow);
    };
  }, []);

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
            <AnimatePresence>
              {isContactFormShow && (
                <div
                  className={styles.closing__subcontainer__right__top}
                  style={{ width: phraseBoxWidth }}>
                  <ContactForm
                    icons={true}
                    colorOne='--color-1'
                    colorTwo='--color-2'
                    colorThree='--color-7'
                  />
                </div>
              )}
            </AnimatePresence>

            <div className={styles.closing__subcontainer__right__phrase_box}>
              {lenguage === 'en' ? (
                viewportWidth < 370 ? (
                  <motion.p style={{ opacity: phraseOpacity }}>
                    After all,
                    <br />
                    I love solving problems
                    <br />
                    with design and code.
                    <br />
                    So, why don't we talk?
                  </motion.p>
                ) : (
                  <motion.p style={{ opacity: phraseOpacity }}>
                    After all, I love solving problems
                    <br />
                    with design and code. So, why
                    <br />
                    don't we talk?
                  </motion.p>
                )
              ) : viewportWidth < 370 ? (
                <motion.p style={{ opacity: phraseOpacity }}>
                  Despues de todo, amo
                  <br />
                  resolver problemas con
                  <br />
                  diseño y código. Así que
                  <br />
                  ¿por qué no hablamos?
                </motion.p>
              ) : (
                <motion.p style={{ opacity: phraseOpacity }}>
                  Después de todo, amo resolver
                  <br />
                  problemas con diseño y código.
                  <br />
                  Así que, ¿por qué no hablamos?
                </motion.p>
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
