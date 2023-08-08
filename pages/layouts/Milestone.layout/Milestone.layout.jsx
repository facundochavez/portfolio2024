import TechnologiesBox from '@/components/TechnologiesBox/TechnologiesBox';
import styles from './Milestone.layout.module.scss';
import TextBox from '@/components/TextBox/TextBox';
import RevealTitle from '@/components/RevealTitle/RevealTitle';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '@/context/global.context';
import useIsMobile from '@/hooks/useIsMobile';
import BrandsCarousel from '@/pages/contents/BrandsCarousel.content/BrandsCarousel.content';
import YoutubeParallax from '@/pages/contents/YouTubeParallax.content/YouTubeParallax.content';
import PrototypesCarousel from '@/pages/contents/PrototypesCarousel.content/PrototypesCarousel.content';
import StartCodingVideo from '@/pages/contents/StartCodingVideo.content/StartCodingVideo.content';
import FrontendVideo from '@/pages/contents/FrontendVideo.content/FrontendVideo.content';
import BackendVideo from '@/pages/contents/BackendVideo.content/BackendVideo.content';

const MilestoneLayout = ({ milestone, index, milestoneRef }) => {
  const contents = {
    brands: <BrandsCarousel />,
    youtube: <YoutubeParallax />,
    prototypes: <PrototypesCarousel />,
    'start-coding': <StartCodingVideo />,
    frontend: <FrontendVideo />,
    backend: <BackendVideo />
  };

  const { viewportWidth } = useIsMobile();
  const { lenguage } = useGlobalContext();
  /*   const [isOnce, setIsOnce] = useState(false); */
  const mainRef = useRef();
  const mainControls = useAnimation();
  const variants = {
    mainVisible: { opacity: 1, y: 0 },
    mainHidden: { opacity: 0, y: 100 }
  };

  const isInView = useInView(mainRef, { once: true });
  useEffect(() => {
    if (isInView) {
      mainControls.start('mainVisible');
    } else {
      mainControls.start('mainHidden');
    }
  }, [isInView]);

  /*   useEffect(() => {
    const handleIsOnce = () => {
      const milestoneRect = document.querySelector(`.${styles.milestone}`).getBoundingClientRect();
      const newIsOnce = window.scrollY > milestoneRect.top;
      setIsOnce(newIsOnce);
    };
    handleIsOnce();
    window.addEventListener('scroll', handleIsOnce);
    return () => {
      window.removeEventListener('scroll', handleIsOnce);
    };
  }, []); */

  //// COMPONENT
  return (
    <section ref={milestoneRef}>
      <div className={styles.milestone}>
        <PathLine milestone={milestone} />
        <header className={styles.milestone__header}>
          {lenguage === 'en' ? (
            <RevealTitle title={milestone.titleEn} isOnce={true} />
          ) : (
            <RevealTitle title={milestone.titleEs} isOnce={true} />
          )}
          <div className={styles.milestone__header__subcontainer}>
            <div className={styles.milestone__header__subcontainer__technologies_box}>
              <TechnologiesBox milestone={milestone} />
            </div>
            {milestone.topTextEn && milestone.id !== 'youtube' && (
              <div className={styles.milestone__header__subcontainer__top_text}>
                <TextBox milestone={milestone} />
              </div>
            )}
          </div>
        </header>
        <motion.main
          ref={mainRef}
          className={styles.milestone__main}
          variants={variants}
          initial='mainHidden'
          animate={mainControls}
          transition={{ delay: 0.15, duration: 0.5, mass: 0.2 }}>
          {contents[milestone.id]}
        </motion.main>
        <motion.footer
          className={styles.milestone__footer}
          variants={variants}
          initial='mainHidden'
          animate={mainControls}
          transition={{ delay: 0.4, duration: 0.5, mass: 0.2 }}>
          {milestone.bottomTextEn && (
            <p
              style={{
                paddingRight:
                  milestone.id === 'start-coding' || milestone.id === 'prototype'
                    ? viewportWidth < 900
                      ? '5px'
                      : '30px'
                    : null
              }}>
              {lenguage === 'en' ? milestone.bottomTextEn : milestone.bottomTextEs}
            </p>
          )}
        </motion.footer>
      </div>
    </section>
  );
};

const PathLine = ({ milestone }) => {
  const pathRef = useRef();
  const circleControls = useAnimation();
  const lineControls = useAnimation();
  const isInView = useInView(pathRef, { once: true });

  useEffect(() => {
    if (isInView) {
      circleControls.start('circleVisible');
      lineControls.start('lineVisible');
    } else {
      circleControls.start('circleHidden');
      lineControls.start('lineHidden');
    }
  }, [isInView]);

  /*   useEffect(() => {
    const handelIsOnce = () => {
      const pathRect = pathRef.current.getBoundingClientRect();
      if (window.scrollY < pathRect.top) {
        circleControls.start('circleHidden');
        lineControls.start('lineHidden');
      }
    }
    handelIsOnce();
    window.addEventListener('scroll', handelIsOnce);
    return () => {
      window.removeEventListener('scroll', handelIsOnce);
    }
  }) */
  //// COMPONENT
  return (
    <div className={styles.pathline} ref={pathRef}>
      {milestone.id === 'brands' && (
        <div
          className={styles.pathline__top_line}
          style={{ backgroundColor: milestone.firstColor }}
        />
      )}
      <motion.div
        className={styles.pathline__circle}
        style={{ backgroundColor: milestone.firstColor }}
        variants={{ circleHidden: { scale: 0 }, circleVisible: { scale: 1 } }}
        initial='circleHidden'
        animate={circleControls}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className={styles.pathline__bottom_line}
        style={{
          backgroundImage: `linear-gradient(to bottom, ${milestone.firstColor}, ${milestone.secondColor})`,
          height:
            milestone.id !== 'back-end' ? 'calc(100% - 38px + 10vh)' : 'calc(100% - 38px + 5vh)'
        }}
        variants={{
          lineHidden: { clipPath: 'polygon(0 0, 100% 0%, 100% 0, 0 0)' },
          lineVisible: { clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)' }
        }}
        initial='lineHidden'
        animate={lineControls}
        transition={{ delay: 0.25, duration: 1 }}
      />
    </div>
  );
};

export default MilestoneLayout;