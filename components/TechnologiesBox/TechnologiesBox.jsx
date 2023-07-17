import Image from 'next/image';
import styles from './TechnologiesBox.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TechnologiesBox = ({ milestone }) => {
  //// COMPONENT
  return (
    <div
      className={styles.technologies_box}
      style={{
        backgroundImage: `linear-gradient(130deg, ${milestone.firstColor} 0%, ${milestone.secondColor} 150%)`
      }}>
      {milestone.technologies.map((technology, index) => {
        return (
          <div className={styles.technologies_box__technology} key={index}>
            <div
              className={styles.technologies_box__technology__icon}
              style={{
                margin:
                  technology.id === 'ant-design'
                    ? '0 -2px'
                    : technology.id === 'sass'
                    ? '0 -3px 0 -3px'
                    : null
              }}>
              <Image
                src={`/icons/icon-${technology.id}.svg`}
                alt={`${technology.name}'s icon.`}
                width={0}
                height={0}
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