import { useRouter } from 'next/router';

const DetailProduct = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>DetailProduct</h1>
      <p>product: {query.slug?.[0]}</p>
    </div>
  );
};

export default DetailProduct;
