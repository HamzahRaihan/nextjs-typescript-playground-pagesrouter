import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/product/product-card';

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) router.push('/auth/login');
  }, [router, isLogin]);

  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  return (
    <div className="container">
      <h1>Product Page</h1>
      <p className="font-bold">Select Product</p>
      <ProductCard products={products} />
    </div>
  );
};

export default ProductPage;
