import styles from './TextBox.module.scss';

const TextBox = ({ milestone, tailLength = 90 }) => {
  const marginRight = milestone.topTextMarginRight || 0;

  //// COMPONENT
  return (
    <div className={styles.text_box} style={{ marginRight: `${marginRight}px` }}>
      <p>{milestone.topText}</p>
      <div className={styles.text_box__path} style={{ height: `calc(100% + ${tailLength}px)` }}>
        <div className={styles.text_box__path__line}></div>
        <div className={styles.text_box__path__circle}></div>
      </div>
    </div>
  );
};

export default TextBox;
