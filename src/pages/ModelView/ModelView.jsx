import React, { useEffect } from 'react';
import './ModelView.css';
import { useParams } from 'react-router-dom';
import { zoom } from '../../utils/zoom';
import logo from '../../logos/sh-logo.png';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1.5, // duration only goes with type tween
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export default function ModelView() {
  const { product } = useParams();

  useEffect(() => {
    const zoomInstance = zoom();
    zoomInstance.setEvent();

    return () => zoomInstance.removeEvent();
  }, []);

  return (
    <motion.div
      className='model-view'
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h3>{product.replace(/_/g, ' ')}</h3>
      <div className='card'>
        <model-viewer
          id='model'
          src={`/assets/models/${product}.glb`}
          ios-src={`/assets/models/${product}.usdz`}
          alt='3D Model'
          auto-rotate
          auto-rotate-delay='1000'
          rotation-per-second='20deg'
          camera-controls
          loading='eager'
          reveal='auto'
          ar
          ar-modes='scene-viewer webxr quick-look'
          ar-scale='fixed'
          touch-action
          bounds='tight'
          shadow-intensity='0.5'
          exposure='1'
          environment-image='neutral'
          max-field-of-view='60deg'
          min-field-of-view='15deg'
        >
          <div className='poster' slot='poster'></div>
          <div className='panel-container'>
            <span>
              Zoom: <span className='zoom-value' id='zoom-value'></span>
            </span>
          </div>
        </model-viewer>
        <div className='suenolar-logo'>
          <a
            href='https://www.suenolarhome.com.py/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={logo} alt='Sueñolar logo' />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
