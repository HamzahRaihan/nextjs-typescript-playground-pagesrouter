import { ProductData } from '@/pages/api/product/product';
import Image from 'next/image';
import React from 'react';
import styles from './Product.module.scss';

const DetailProductComponent = ({ product }: { product: ProductData }) => {
  return (
    <div className={styles.productDetail}>
      <Image className={styles.productDetail__image} src={product.image} alt="product-image" width={500} height={500} priority />
      <div className={styles.productDetail__desc}>
        <h1 className={styles.productDetail__desc__title}>{product.product_name}</h1>
        <p className={styles.productDetail__desc__category}>{product.category}</p>
        <div className={styles.productDetail__desc__price}>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
      </div>
    </div>
  );
};

export default DetailProductComponent;
