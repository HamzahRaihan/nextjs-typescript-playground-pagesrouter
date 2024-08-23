import Link from 'next/link';
import styles from './navbar.module.css';

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
    </div>
  );
};

export default Navbar;
