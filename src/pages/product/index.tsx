import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Category = {
  category: string;
  type: string;
  id: number;
};

const categories: Category[] = [
  {
    category: 'jeans',
    type: 'outer',
    id: 1,
  },
  {
    category: 't-shirt',
    type: 'outer',
    id: 2,
  },
  {
    category: 'jacket',
    type: 'outer',
    id: 3,
  },
];

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) router.push('/auth/login');
  }, [router, isLogin]);
  return (
    <div>
      <h1>Product Page</h1>
      <p className="font-bold m-2">Select Category</p>
      <div className="flex flex-col gap-3">
        {categories.map((item) => (
          <Link key={item.id} href={`product/${item.category}`} className="button">
            {item.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
