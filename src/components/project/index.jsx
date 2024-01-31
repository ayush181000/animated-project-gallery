'use client';
import React from 'react';
import styles from './project.module.css';

const index = ({ project }) => {
  return (
    <div className={styles.project}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default index;
