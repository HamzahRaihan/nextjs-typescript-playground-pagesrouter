import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
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
