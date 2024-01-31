'use client'
import { useState } from "react";
import styles from './page.module.css';
import Project from '../components/project/index';
import Modal from '../components/modal/index';

export default function Home() {

  const projects = [
    {
      title: 'C2 Montreal',
      description: 'Design and Development',
      src: 'c2montreal.png',
      color: '#000000'
    },
    {
      title: 'Office Studios',
      description: 'Design and Development',
      src: 'officestudio.png',
      color: '##BCBCBC'
    },
    {
      title: 'Locomotive',
      description: 'Design and Development',
      src: 'locomotive.png',
      color: '#EFE8D3'
    },
    {
      title: 'Silencio',
      description: 'Design and Development',
      src: 'silencio.png',
      color: '#706063'
    }
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return <Project key={index} index={index} project={project} setModal={setModal} />
        })}
      </div>
      <Modal projects={projects} modal={modal} />

    </main>
  );
}
