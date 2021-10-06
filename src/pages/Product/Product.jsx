import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/products';
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

export default function Product() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const { category } = useParams();

  useEffect(() => {
    const productsSelected = products.filter(
      (product) => product.category === category
    );

    setData(productsSelected);
  }, [category]);

  return (
    <div className='product'>
      <h3>por favor seleccione un producto para verlo en realidad aumentada</h3>
      {data.length === 0 && <div>Sin productos</div>}
      {data.length > 0 && (
        <div className='list-wrapper'>
          <input
            type='text'
            placeholder='Buscar productos...'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <motion.ul variants={ulVariants} initial='initial' animate='animate'>
            {data
              .filter(
                (product) =>
                  product.fileName
                    .replace(/_/g, ' ')
                    .toLowerCase()
                    .includes(name.toLowerCase()) || name === ''
              )
              .map((product) => (
                <motion.li key={product.id} variants={liVariants}>
                  <Link to={`/${category}/${product.fileName}`}>
                    {product.fileName.replace(/_/g, ' ')}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        </div>
      )}
    </div>
  );
}
