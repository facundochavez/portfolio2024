import PrototypesLine from '@/components/DottedBackground/PrototypesLine/PrototypesLine';
import styles from './PrototypesCarousel.content.module.scss';
import prototypes from '@/data/prototypes.data.json';
import useIsMobile from '@/hooks/useIsMobile';

const PrototypesCarousel = () => {
  const { isMobile } = useIsMobile();

  const firstLineMobile = prototypes.firstLineMobile;
  const secondLineMobile = prototypes.secondLineMobile;

  const lineDesktop = prototypes.lineDesktop;

  //// COMPONENT
  return (
    <div className={styles.prototypes_carousel}>
      {isMobile ? (
        <>
          <PrototypesLine prototypes={firstLineMobile} baseVelocity={-1} height={300} />
          <PrototypesLine prototypes={secondLineMobile} baseVelocity={1.5} height={300} />
        </>
      ) : (
        <PrototypesLine
          prototypes={lineDesktop}
          baseVelocity={-1}
          height={450}
          changeDirection={false}
        />
      )}
    </div>
  );
};

export default PrototypesCarousel;
