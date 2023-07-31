import Image from 'next/image';
import styles from './Header.module.scss';
import IconLinks from '../IconLinks/IconLinks';
import LenguageSwitcher from '../LenguageSwitcher/LenguageSwitcher';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/context/global.context';
import ContactForm from '../ContactForm/ContactForm';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { contactFormHeight } = useGlobalContext();

  useEffect(() => {
    const handleHeaderShow = () => {
      
      if (window.scrollY < 250) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(false);
      }
    };
    handleHeaderShow();
    window.addEventListener('scroll', handleHeaderShow);
    return () => {
      window.removeEventListener('scroll', handleHeaderShow);
    };
  }, []);

  //// COMPONENT
  return (
    <AnimatePresence>
      {isHeaderShow && (
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: '-100px' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100px' }}
          transition={{
            type: 'spring',
            mass: 0.2
          }}>
          <div className={styles.header__wrapper}>
            <nav className={styles.header__wrapper__nav}>
              <LenguageSwitcher />
              <IconLinks />
              <span
                className={styles.header__wrapper__nav__contact}
                style={isContactFormOpen ? { color: 'var(--color-3)' } : null}
                onClick={() => setIsContactFormOpen(!isContactFormOpen)}>
                Contact
              </span>
            </nav>

            <AnimatePresence>
              {isContactFormOpen && (
                <div
                  className={styles.header__wrapper__contact_form}
                  style={{ height: `${contactFormHeight}px` }}>
                  <ContactForm
                    colorOne={'--color-2'}
                    colorTwo={'--color-3'}
                    colorThree={'--color-2'}
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
