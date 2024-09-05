import Link from 'next/link';
import styles from './navbar.module.css';
import { signIn } from 'next-auth/react';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className="button">
        Logo
      </Link>
      <Link href="/about" className="button">
        Menu
      </Link>
      <Link href="/product/" className="button">
        Product
      </Link>
      <Link href="/auth/login" className="button">
        Login
      </Link>
      <button type="button" className="button" onClick={() => signIn()}>
        sign in
      </button>
    </div>
  );
};

export default Navbar;
