import { ProductData } from '@/pages/api/product/product';
import React from 'react';
import Image from 'next/image';
import styles from './Product.module.scss';
import ProductSkeleton from './product-skeleton';
import Link from 'next/link';

const ProductCard = ({ products }: { products: ProductData[] }) => {
  return (
    <div className={styles.product__grid}>
      {products?.length === 0 ? (
        <ProductSkeleton />
      ) : (
        products?.map((product: ProductData) => (
          <Link href={`/product/${product.id}`} key={product.id} className={styles.product__content}>
            <Image className={styles.product__content__image} src={product.image} alt="product-image" width={500} height={500} priority />
            <h1 className={styles.product__content__title}>{product.product_name}</h1>
            <p className={styles.product__content__subtitle}>{product.category}</p>
            <p className={styles.product__content__price}>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductCard;
