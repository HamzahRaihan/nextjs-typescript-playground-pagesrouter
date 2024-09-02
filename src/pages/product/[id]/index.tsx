import { fetcher } from '@/lib/swr/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProductSkeleton from '@/components/product/product-skeleton';
import DetailProductComponent from '@/components/product/product-detail';
import { ProductData } from '@/pages/api/product/product';

const DetailProduct = ({ product }: { product: ProductData }) => {
  // const { query } = useRouter();

  // client-side
  // const { data, isLoading } = useSWR(`/api/product/${query.id?.[0]}`, fetcher);

  return (
    <div className="my-2">
      {/* client-side */}
      {/* {isLoading ? <ProductSkeleton /> : <DetailProductComponent product={isLoading ? {} : data.result} />} */}

      {/* server-side and static-side */}
      <DetailProductComponent product={product} />
    </div>
  );
};

export default DetailProduct;

// server side rendering
// export async function getServerSideProps({ params }: { params: { id: string } }) {
//   console.log('🚀 ~ getServerSideProps ~ params:', params.id);
//   const response = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const data = await response.json();
//   return {
//     props: {
//       products: data.result,
//     },
//   };
// }

// static-side rendering
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/product`);
  const data = await response.json();
  const paths = data.result.map((product: ProductData) => ({ params: { id: product.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log('🚀 ~ getServerSideProps ~ params:', params.id);
  const response = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const data = await response.json();
  return {
    props: {
      product: data.result,
    },
  };
}
