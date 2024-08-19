import { useRouter } from 'next/router';

const DetailProduct = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>DetailProduct</h1>
      <p>product: {query.id}</p>
    </div>
  );
};

export default DetailProduct;
