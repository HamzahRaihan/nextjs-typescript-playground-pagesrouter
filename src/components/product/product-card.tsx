import { ProductData } from '@/pages/api/product/product';
import React from 'react';
import Image from 'next/image';
import styles from './Product.module.scss';

const ProductCard = ({ products }: { products: ProductData[] }) => {
  return (
    <div className={styles.product__grid} style={{ borderColor: 'black', borderWidth: 2 }}>
      {products.map((product: ProductData) => (
        <div key={product.id} className={styles.product__card}>
          <Image className={styles.product__image} src={product.image} alt="product-image" width={500} height={500} />
          <h1 className={styles.product__title}>{product.product_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
