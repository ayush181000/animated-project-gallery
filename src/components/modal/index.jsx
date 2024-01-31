import React from 'react';
import styles from './modal.module.css';
import Image from 'next/image';

const index = ({ projects, modal }) => {
  const { active, index } = modal;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalSlider}>
        {projects.map((project, index) => {
          const { src, color, title } = project;
          return (
            <div
              key={`modal${index}`}
              style={{ backgroundColor: color }}
              className={styles.modal}
            >
              <Image
                src={`/images/${src}`}
                alt={title}
                width={300}
                height={0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
