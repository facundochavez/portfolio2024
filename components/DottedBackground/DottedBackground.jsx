import { useEffect } from "react";
import styles from "./DottedBackground.module.scss";

const DottedBackground = () => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dottedBackground = document.querySelector(`.${styles.dotted_background_above}`);
      const dottectBackgroundRect = dottedBackground.getBoundingClientRect();
      const x = e.clientX - dottectBackgroundRect.left;
      const y = e.clientY - dottectBackgroundRect.top;

      dottedBackground.style.setProperty('--mouse-x', `${x}px`);
      dottedBackground.style.setProperty('--mouse-y', `${y}px`);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //// COMPONENT
  return (
    <>
      <div className={styles.dotted_background_behind} />
      <div className={styles.dotted_background_above} style={{ '--mouse-x': '0px', '--mouse-y': '0px' }} />
    </>
  );
};

export default DottedBackground;

