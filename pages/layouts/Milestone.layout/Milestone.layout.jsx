import TechnologiesBox from '@/components/TechnologiesBox/TechnologiesBox';
import styles from './Milestone.layout.module.scss';
import TextBox from '@/components/TextBox/TextBox';
import RevealTitle from '@/components/RevealTitle/RevealTitle';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '@/context/global.context';
import useIsMobile from '@/hooks/useIsMobile';
import BrandsCarousel from './contents/BrandsCarousel.content/BrandsCarousel.content';
import YouTubeLayout from './contents/YouTubeLayout.content/YouTubeLayout.content';
import PrototypesCarousel from './contents/PrototypesCarousel.content/PrototypesCarousel.content';
import StoreLayout from './contents/StoreeLayout.content copy/StoreLayout.content';
import StartCodingVideo from './contents/StartCodingVideo.content/StartCodingVideo.content';
import FrontendVideo from './contents/FrontendVideo.content/FrontendVideo.content';
import BackendVideo from './contents/BackendVideo.content/BackendVideo.content';
import { texts } from './texts/Texts/Texts';

const MilestoneLayout = ({ milestone, milestoneRef }) => {
  const contents = {
    brands: <BrandsCarousel />,
    youtube: <YouTubeLayout />,
    prototypes: <PrototypesCarousel />,
    store: < StoreLayout/>,
    'start-coding': <StartCodingVideo />,
    'front-end': <FrontendVideo />,
    'back-end': <BackendVideo />
  };

  const { viewportWidth } = useIsMobile();
  const { lenguage } = useGlobalContext();
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

  //// COMPONENT
  return (
    <section ref={milestoneRef}>
      <div className={styles.milestone}>
        <PathLine milestone={milestone} />
        <header className={styles.milestone__header}>
          {lenguage === 'en' ? (
            <RevealTitle title={milestone?.titleEn} isOnce={true} />
          ) : (
            <RevealTitle title={milestone?.titleEs} isOnce={true} />
          )}
          <div className={styles.milestone__header__subcontainer}>
            <div className={styles.milestone__header__subcontainer__technologies_box}>
              <TechnologiesBox milestone={milestone} />
            </div>
            {texts[milestone?.id]?.topText && milestone?.id !== 'youtube' && milestone?.id !== 'store' &&(
              <div
                className={styles.milestone__header__subcontainer__top_text}
                style={{
                  marginTop:
                    viewportWidth >= 900 && milestone?.id === 'front-end'
                      ? '100px'
                      : milestone?.id === 'back-end'
                      ? '70px'
                      : null
                }}>
                <TextBox
                  milestone={milestone}
                  text={texts[milestone?.id]?.topText}
                  controls={mainControls}
                  tailLength={milestone?.id === 'brands' ? 100 : 78}
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
          transition={{ /* delay: 0.15, */ duration: 0.5, mass: 0.2 }}>
          {contents[milestone?.id]}
        </motion.main>
        <motion.footer
          className={styles.milestone__footer}
          variants={variants}
          initial='mainHidden'
          animate={mainControls}
          transition={{ /* delay: 0.2, */ duration: 0.5, mass: 0.2 }}
          style={{
            paddingRight:
              milestone?.id === 'prototypes' || milestone?.id === 'start-coding'
                ? viewportWidth < 900
                  ? '5px'
                  : '30px'
                : null
          }}>
          {texts[milestone?.id]?.bottomText ?? null}
        </motion.footer>
      </div>
    </section>
  );
};

const PathLine = ({ milestone }) => {
  const pathRef = useRef();

  //// COMPONENT
  return (
    <div className={styles.pathline} ref={pathRef}>
      {milestone?.id === 'brands' && (
        <div
          className={styles.pathline__top_line}
          style={{ backgroundColor: milestone?.firstColor }}
        />
      )}
      <div className={styles.pathline__circle} style={{ backgroundColor: milestone?.firstColor }} />
      <div
        className={styles.pathline__bottom_line}
        style={{
          backgroundImage: `linear-gradient(to bottom, ${milestone?.firstColor}, ${milestone?.secondColor})`,
          height:
            milestone?.id !== 'back-end' ? 'calc(100% - 38px + 10vh)' : 'calc(100% - 38px + 5vh)'
        }}
      />
    </div>
  );
};

export default function LazyMilestoneLayout({ milestone }) {
  const [show, setShow] = useState(false);
  const [rootMargin, setRootMargin] = useState('200px');

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      }

      setRootMargin(`${window.innerHeight}px`);
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    });

    observer.observe(document.getElementById(milestone?.id));
  });
  return <div id={milestone?.id}>{show ? <MilestoneLayout milestone={milestone} /> : null}</div>;
}

export { MilestoneLayout };
