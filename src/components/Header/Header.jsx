import React from 'react';
import './Header.css';
import logo from '../../logos/slp-logo.jpg';
import { motion } from 'framer-motion';

const imgVariants = {
  initial: {
    opacity: 0,
    x: '-20px',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const h1Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Header() {
  return (
    <div className='header'>
      <motion.img
        src={logo}
        alt='Logo Sueñolar'
        variants={imgVariants}
        initial='initial'
        animate='animate'
      />
      <motion.h1 variants={h1Variants} initial='initial' animate='animate'>
        BIENVENIDO A NUESTOR PORTAL DE REALIDAD AUMENTADA
      </motion.h1>
    </div>
  );
}
