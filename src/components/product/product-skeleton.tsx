import styles from '@/components/product/Product.module.scss';

const ProductSkeleton = () => {
  return (
    <>
      <div className={`${styles.product__content__skeleton} animate-pulse h-[400px]`}>
        <div className={styles.product__content__skeleton__image} />
        <div className={styles.product__content__skeleton__title} />
        <div className={styles.product__content__skeleton__subtitle} />
        <div className={styles.product__content__skeleton__price} />
      </div>
      <div className={`${styles.product__content__skeleton} animate-pulse h-[400px]`}>
        <div className={styles.product__content__skeleton__image} />
        <div className={styles.product__content__skeleton__title} />
        <div className={styles.product__content__skeleton__subtitle} />
        <div className={styles.product__content__skeleton__price} />
      </div>
      <div className={`${styles.product__content__skeleton} animate-pulse h-[400px]`}>
        <div className={styles.product__content__skeleton__image} />
        <div className={styles.product__content__skeleton__title} />
        <div className={styles.product__content__skeleton__subtitle} />
        <div className={styles.product__content__skeleton__price} />
      </div>
    </>
  );
};

export default ProductSkeleton;
