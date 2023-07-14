import TechnologiesBox from '@/components/TechnologiesBox/TechnologiesBox';
import styles from './ContentSection.module.scss';

const ContentSection = ({ step }) => {
  //// COMPONENT
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.content__path}>
          {step.id === 'step1' && (
            <div
              className={styles.content__path__top_line}
              style={{ backgroundColor: step.firstColor }}
            />
          )}
          <div
            className={styles.content__path__circle}
            style={{ backgroundColor: step.firstColor }}
          />
          <div
            className={styles.content__path__bottom_line}
            style={{
              backgroundImage: `linear-gradient(to bottom, ${step.firstColor}, ${step.secondColor})`
            }}
          />
        </div>
        <h3 className={styles.content__title}>{step.title}</h3>
        <div className={styles.content__top_box}>
          <TechnologiesBox step={step} />
          {/* {step.up_text && <p className={styles.content__top_box__up_text}>{step.topText}</p>} */}
        </div>
        {step.content ?? null}
        {step.down_text && <p className={styles.content__bottom_text}>{step.bottomText}</p>}
      </div>
    </section>
  );
};

export default ContentSection;
