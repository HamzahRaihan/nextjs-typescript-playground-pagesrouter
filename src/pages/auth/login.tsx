/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  function handlerLogin() {
    router.push('/product');
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handlerLogin()}>login</button>
      <p>
        Don't have account?{' '}
        <span>
          <Link href={'register'}>Register</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
