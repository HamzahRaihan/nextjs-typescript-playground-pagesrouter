import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/product/product-card';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';

const ProductPage = () => {
  const [isLogin] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!isLogin) router.push('/auth/login');
  }, [router, isLogin]);

  const { data, isLoading } = useSWR('/api/product', fetcher);

  return (
    <div className="container">
      <h1>Product Page</h1>
      <p className="font-bold">Select Product</p>
      <ProductCard products={isLoading ? [] : data.result} />
    </div>
  );
};

export default ProductPage;
