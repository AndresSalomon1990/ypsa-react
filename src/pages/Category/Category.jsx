import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import { categories } from '../../data/categories';
import { motion } from 'framer-motion';

const h3Variants = {
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

const ulVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const liVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Category() {
  return (
    <div className='category'>
      <motion.h3 variants={h3Variants} initial='initial' animate='animate'>
        por favor seleccione una categoría para ver los productos
      </motion.h3>
      <div className='list-wrapper'>
        <motion.ul variants={ulVariants} initial='initial' animate='animate'>
          {categories.map((category) => (
            <motion.li key={category.id} variants={liVariants}>
              <Link to={`/${category.route}`}>{category.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
