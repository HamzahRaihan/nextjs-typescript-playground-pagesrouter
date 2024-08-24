import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductData } from '../api/product/product';

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
      <div className="flex flex-col gap-3">
        {products.map((product: ProductData) => (
          <Link key={product.id} href={`product/${product.id}`} className="button">
            {product.product_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
