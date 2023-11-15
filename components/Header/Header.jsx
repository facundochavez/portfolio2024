import styles from "./Header.module.scss";
import IconLinks from "../IconLinks/IconLinks";
import LenguageSwitcher from "../LenguageSwitcher/LenguageSwitcher";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/global.context";
import ContactForm from "../ContactForm/ContactForm";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const {
    lenguage,
    contactFormHeight,
    isContactFormOpen,
    setIsContactFormOpen,
  } = useGlobalContext();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const handleHeaderShow = () => {
      if (window.scrollY < 250) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(false);
        setIsContactFormOpen(false);
      }
      setIsFirstRender(false);
    };
    handleHeaderShow();
    window.addEventListener("scroll", handleHeaderShow);
    return () => {
      window.removeEventListener("scroll", handleHeaderShow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = () => {
    const englishPdfPath = "/files/CV_Facundo_Chavez_English.pdf";
    const spanishPdfPath = "/files/CV_Facundo_Chavez_Spanish.pdf";

    const englishDownloadLink = document.createElement("a");
    englishDownloadLink.href = englishPdfPath;
    englishDownloadLink.download = "CV Facundo Chavez - English";
    document.body.appendChild(englishDownloadLink);
    englishDownloadLink.click();
    document.body.removeChild(englishDownloadLink);

    const spanishDownloadLink = document.createElement("a");
    spanishDownloadLink.href = spanishPdfPath;
    spanishDownloadLink.download = "CV Facundo Chavez - Español";
    document.body.appendChild(spanishDownloadLink);
    spanishDownloadLink.click();
    document.body.removeChild(spanishDownloadLink);
  };

  //// COMPONENT
  return (
    <AnimatePresence>
      {isHeaderShow && (
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: "-100px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100px" }}
          transition={{
            type: "spring",
            mass: 0.2,
            delay: isFirstRender ? 0.7 : 0,
          }}
        >
          <div className={styles.header__wrapper}>
            <nav className={styles.header__wrapper__nav}>
              <LenguageSwitcher />
              <IconLinks />

              <span
                className={styles.header__wrapper__nav__cv}
                onClick={handleDownload}
              >
                CV
              </span>

              <span
                className={styles.header__wrapper__nav__contact}
                style={isContactFormOpen ? { color: "var(--color-3)" } : null}
                onClick={() => setIsContactFormOpen(!isContactFormOpen)}
              >
                {lenguage === "en" ? "Contact" : "Contacto"}
              </span>
            </nav>

            <AnimatePresence>
              {isContactFormOpen && (
                <div
                  className={styles.header__wrapper__contact_form}
                  style={{ height: `${contactFormHeight}px` }}
                >
                  <ContactForm
                    colorOne={"--color-2"}
                    colorTwo={"--color-3"}
                    colorThree={"--color-2"}
                    overlaid={contactFormHeight === 330}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
