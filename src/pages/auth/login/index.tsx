/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './login.module.scss';

const LoginPage = () => {
  const router = useRouter();
  function handleLogin() {
    router.push('/product');
  }
  return (
    <div className={styles.login}>
      <Head>
        <title>Login Page</title>
      </Head>
      <h1 className="text-2xl font-bold">Login</h1>
      <button onClick={() => handleLogin()} className="button">
        login
      </button>
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
