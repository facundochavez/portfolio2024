import Image from 'next/image';
import styles from './IconLinks.module.scss';

const IconLinks = () => {
  //// COMPONENT
  return (
    <div className={styles.icon_links}>
      <a
        className={styles.icon_links__icon}
        href='https://www.linkedin.com/in/facundo-chavez-a46b55b5/'
        target='_blank'>
        <Image
          src={`/icons/icon-linkedin.svg`}
          alt={`LinkedIn's icon.`}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
        />
      </a>
      <a
        className={styles.icon_links__icon}
        style={{ marginRight: '5px' }}
        href='https://github.com/facundochavez'
        target='_blank'>
        <Image
          src={`/icons/icon-github.svg`}
          alt={`GitHub's icon.`}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
        />
      </a>
    </div>
  );
};

export default IconLinks;
