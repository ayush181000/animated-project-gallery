/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react';
import styles from './modal.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const index = ({ projects, modal }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    const moveContainerY = gsap.quickTo(container.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    const moveCursorX = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  });

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial='inital'
        animate={active ? 'open' : 'closed'}
        className={styles.modalContainer}
        ref={container}
      >
        <div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
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
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial='inital'
        animate={active ? 'open' : 'closed'}
        ref={cursor}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial='inital'
        animate={active ? 'open' : 'closed'}
        ref={cursorLabel}
        className={styles.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
};

export default index;
