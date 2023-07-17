import styles from './TextBox.module.scss';

const TextBox = ({ text }) => {
  //// COMPONENT
  return <div className={styles.text_box}>
    <p>{text}</p>
    <div className={styles.text_box__path}>
      <div className={styles.text_box__path__line}></div>
      <div className={styles.text_box__path__circle}></div>
    </div>
  </div>;
};

export default TextBox;
