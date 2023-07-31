import Image from "next/image";
import styles from "./IconLinks.module.scss";

const IconLinks = () => {
  
  //// COMPONENT
  return (
    <div className={styles.icon_links}>
      <div className={styles.icon_links__icon}>
          <Image
            src={`/icons/icon-linkedin.svg`}
            alt={`LinkedIn's icon.`}
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className={styles.icon_links__icon} style={{ marginRight: '5px' }}>
          <Image
            src={`/icons/icon-github.svg`}
            alt={`GitHub's icon.`}
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
    </div>
  );
};

export default IconLinks;
