import ProductCard from '@/components/product/product-card';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';

const ProductPage = () => {
  const { data, isLoading } = useSWR('/api/product', fetcher);

  return (
    <div>
      <h1>Product Page</h1>
      <p className="font-bold">Select Product</p>
      <ProductCard products={isLoading ? [] : data.result} />
    </div>
  );
};

export default ProductPage;
