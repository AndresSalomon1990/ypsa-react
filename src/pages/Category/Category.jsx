import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import { categories } from '../../data/categories';
import { motion } from 'framer-motion';

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
      <h3>por favor seleccione una categoría para ver los productos</h3>
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
