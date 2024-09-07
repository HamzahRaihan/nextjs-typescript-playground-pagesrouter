import Link from 'next/link';
import styles from './navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data } = useSession();
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
            <div className="rounded-full w-8 h-8 bg-gray-200 animate-pulse"></div>
            {data.user.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
