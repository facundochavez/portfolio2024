import Image from 'next/image';
import styles from './TechnologiesBox.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TechnologiesBox = ({ step }) => {
  //// COMPONENT
  return (
    <div
      className={styles.technologies_box}
      style={{
        backgroundImage: `linear-gradient(130deg, ${step.firstColor} 0%, ${step.secondColor} 150%)`
      }}>
      {step.technologies.map((technology, index) => {
        return (
          <div className={styles.technologies_box__technology} key={index}>
            <div
              className={styles.technologies_box__technology__icon}
              style={{ margin: technology.name === 'Ant\u00A0Design' ? '0 -2px' :  technology.name === 'Sass' ? '0 -2px 0 -3px': null }}>
              <Image
                src={`icons/${technology.icon}`}
                alt={`${technology.icon}`}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h3 className={styles.technologies_box__technology__name}>{technology.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesBox;
