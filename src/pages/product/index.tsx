import Link from 'next/link';

type Category = {
  category: string;
  id: number;
};

const categories: Category[] = [
  {
    category: 'jeans',
    id: 1,
  },
  {
    category: 't-shirt',
    id: 2,
  },
  {
    category: 'jacket',
    id: 3,
  },
];

const ProductPage = () => {
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
