import TechnologiesBox from '@/components/TechnologiesBox/TechnologiesBox';
import styles from './Milestone.layout.module.scss';
import TextBox from '@/components/TextBox/TextBox';
import RevealTitle from '@/components/RevealTitle/RevealTitle';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '@/context/global.context';
import useIsMobile from '@/hooks/useIsMobile';
import BrandsCarousel from './contents/BrandsCarousel.content/BrandsCarousel.content';
import YoutubeParallax from './contents/YouTubeParallax.content/YouTubeParallax.content';
import PrototypesCarousel from './contents/PrototypesCarousel.content/PrototypesCarousel.content';
import StartCodingVideo from './contents/StartCodingVideo.content/StartCodingVideo.content';
import FrontendVideo from './contents/FrontendVideo.content/FrontendVideo.content';
import BackendVideo from './contents/BackendVideo.content/BackendVideo.content';
import { texts } from './texts/Texts/Texts';

const MilestoneLayout = ({ milestone, milestoneRef }) => {
  const contents = {
    brands: <BrandsCarousel />,
    youtube: <YoutubeParallax />,
    prototypes: <PrototypesCarousel />,
    'start-coding': <StartCodingVideo />,
    'front-end': <FrontendVideo />,
    'back-end': <BackendVideo />
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
      mainControls.start('textVisible');
      mainControls.start('pathVisible');
    } else {
      mainControls.start('mainHidden');
      mainControls.start('textHidden');
      mainControls.start('pathHidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {texts[milestone.id]?.topText && milestone.id !== 'youtube' && (
              <div
                className={styles.milestone__header__subcontainer__top_text}
                style={{
                  marginTop:
                    viewportWidth >= 900 && milestone.id === 'front-end'
                      ? '100px'
                      : milestone.id === 'back-end'
                      ? '70px'
                      : null
                }}>
                <TextBox
                  milestone={milestone}
                  text={texts[milestone.id]?.topText}
                  controls={mainControls}
                />
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
          transition={{ delay: 0.2, duration: 0.5, mass: 0.2 }}>
          {contents[milestone.id]}
        </motion.main>
        <motion.footer
          className={styles.milestone__footer}
          variants={variants}
          initial='mainHidden'
          animate={mainControls}
          transition={{ delay: 0.3, duration: 0.5, mass: 0.2 }}
          style={{
            paddingRight:
              milestone.id === 'prototypes' || milestone.id === 'start-coding'
                ? viewportWidth < 900
                  ? '5px'
                  : '30px'
                : null
          }}>
          {texts[milestone.id]?.bottomText ?? null}
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div
        className={styles.pathline__circle}
        style={{ backgroundColor: milestone.firstColor }}
        variants={{ circleHidden: { scale: 0 }, circleVisible: { scale: 1 } }}
        initial='circleHidden'
        animate={circleControls}
        transition={{ delay: 0.2 }}
      />
      <div
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
