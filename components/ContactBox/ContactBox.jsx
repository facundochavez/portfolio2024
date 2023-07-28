import styles from './ContactBox.module.scss';

const ContactBox = ({ linkIcons = false }) => {
  //// COMPONENT
  return (
    <div className={styles.contact_box}>
      <input type='text' className={styles.contact_box__input} placeholder='Your name' />
      <input type='email' className={styles.contact_box__input} placeholder='Your email' />
      <input type='textArea' className={styles.contact_box__input} placeholder='Your message' />
      <footer className={styles.contact_box__footer}>
        {linkIcons && <div className={styles.contact_box__footer__icons} />}
        <a href='#' className={styles.contact_box__footer__link}>
          Or send an E-mail
        </a>
        <button className={styles.contact_box__footer__button} type='submit'>
          Send
        </button>
      </footer>
    </div>
  );
};

export default ContactBox;
