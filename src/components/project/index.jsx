'use client';
import React from 'react';
import styles from './project.module.css';

const index = ({ index, setModal, project }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className={styles.project}
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default index;
