import { useRouter } from 'next/router';

// [[...filename]] means that query is optional and can be use as a index or main file
const ShopPage = () => {
  const { query } = useRouter();
  return <div>ShopPage {query.slug?.[0]}</div>;
};

export default ShopPage;
