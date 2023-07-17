import TechnologiesBox from '@/components/TechnologiesBox/TechnologiesBox';
import styles from './Milestone.section.module.scss';
import TextBox from '@/components/TextBox/TextBox';

const MilestoneSection = ({ milestone, content }) => {
  //// COMPONENT
  return (
    <section>
      <div className={styles.milestone}>
        <PathLine milestone={milestone} />
        <header className={styles.milestone__header}>
          <h3 className={styles.milestone__header__title}>{milestone.title}</h3>
          <div className={styles.milestone__header__subcontainer}>
            <TechnologiesBox milestone={milestone} />
            {milestone.topText && <TextBox text={milestone.topText} />}
          </div>
        </header>
        <main className={styles.milestone__main}>{content ?? null}</main>
        <footer className={styles.milestone__footer}>
          {milestone.bottomText && <p>{milestone.bottomText}</p>}
        </footer>
      </div>
    </section>
  );
};

const PathLine = ({ milestone }) => {
  //// COMPONENT
  return (
    <div className={styles.pathline}>
      {milestone.id === 'brands' && (
        <div
          className={styles.pathline__top_line}
          style={{ backgroundColor: milestone.firstColor }}
        />
      )}
      <div className={styles.pathline__circle} style={{ backgroundColor: milestone.firstColor }} />
      <div
        className={styles.pathline__bottom_line}
        style={{
          backgroundImage: `linear-gradient(to bottom, ${milestone.firstColor}, ${milestone.secondColor})`
        }}
      />
    </div>
  );
};

export default MilestoneSection;
