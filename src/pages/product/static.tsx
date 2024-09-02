import ProductCard from '@/components/product/product-card';
import { ProductData } from '../api/product/product';

const ProductPage = ({ products }: { products: ProductData[] }) => {
  return (
    <div className="my-2">
      <h1>Product Page (static side)</h1>
      <p className="font-bold">Select Product</p>
      <ProductCard products={products} />
    </div>
  );
};

export default ProductPage;

// static side
// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/product');
//   const data = await response.json();
//   return {
//     props: {
//       products: data.result,
//     },
//   };
// }

// Incremental Static Regeneration
export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/product');
  const data = await response.json();
  return {
    props: {
      products: data.result,
    },
    // revalidate: 10,
  };
}
