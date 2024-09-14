import Link from 'next/link';
import styles from './navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
  const { data }: any = useSession();
  console.log('🚀 ~ Navbar ~ data:', data);
  return (
    <div className={styles.navbar}>
      <div className="flex gap-2">
        <Link href="/" className="button">
          Logo
        </Link>
        <Link href="/about" className="button">
          Menu
        </Link>
        <Link href="/product/" className="button">
          Product
        </Link>
        <Link href="/profile" className="button">
          Profile
        </Link>
      </div>
      {/* <Link href="/auth/login" className="button">
        Login
      </Link> */}
      <div className="flex gap-2 items-center">
        {data ? (
          <button type="button" className="button" onClick={() => signOut()}>
            sign out
          </button>
        ) : (
          <button type="button" className="button" onClick={() => signIn()}>
            sign in
          </button>
        )}
        {data?.user && (
          <div className="flex text-white items-center gap-1 border p-1 rounded-xl cursor-pointer hover:bg-zinc-100 hover:text-black transition-all ">
            {data.user.image ? <Image src={data.user.image} alt="user-profile" width={30} height={30} className="rounded-full" /> : <div className="rounded-full w-8 h-8 bg-gray-200 animate-pulse"></div>}
            {data.user.fullname}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
