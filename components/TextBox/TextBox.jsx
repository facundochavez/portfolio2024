import styles from './TextBox.module.scss';

const TextBox = ({ text, tailLength = 90 }) => {
  //// COMPONENT
  return (
    <div className={styles.text_box}>
      <p>{text}</p>
      <div className={styles.text_box__path} style={{ height: `calc(100% + ${tailLength}px)` }}>
        <div className={styles.text_box__path__line}></div>
        <div className={styles.text_box__path__circle}></div>
      </div>
    </div>
  );
};

export default TextBox;
