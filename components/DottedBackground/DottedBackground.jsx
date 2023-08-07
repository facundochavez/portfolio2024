import { useEffect, useState } from "react";
import styles from "./DottedBackground.module.scss";
import { motion } from "framer-motion";

const DottedBackground = () => {
  const [translationX, setTranslationX] = useState(0);
  const [translationY, setTranslationY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dottedBackground = document.querySelector(`.${styles.dotted_background_above}`);
      const dottectBackgroundRect = dottedBackground.getBoundingClientRect();
      const x = e.clientX - dottectBackgroundRect.left;
      const y = e.clientY - dottectBackgroundRect.top;

      dottedBackground.style.setProperty('--mouse-x', `${x}px`);
      dottedBackground.style.setProperty('--mouse-y', `${y}px`);
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setTranslationY(scrollPosition*-0.1);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
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

