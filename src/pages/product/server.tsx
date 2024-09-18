import ProductCard from '@/components/product/product-card';
import { ProductData } from '../api/product/product';

const ProductPage = ({ products }: { products: ProductData[] }) => {
  return (
    <div className="container my-2">
      <h1>Product Page (server side)</h1>
      <p className="font-bold">Select Product</p>
      <ProductCard products={products} />
    </div>
  );
};

export default ProductPage;

// called every request
export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/product`);
  const data = await response.json();
  return {
    props: {
      products: data.result,
    },
  };
}
