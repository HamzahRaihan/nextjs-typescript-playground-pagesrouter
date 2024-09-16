import React from 'react';

import { useRouter } from 'next/router';
import { Roboto } from 'next/font/google';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../Navbar'), {
  loading: () => <p>loading...</p>,
});

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();

  const disableNav = ['/auth/login', '/auth/register', '/404'];
  return (
    <main className={roboto.className}>
      {!disableNav.includes(pathname) && <Navbar />}
      <div className="container flex flex-col justify-center">{children}</div>
    </main>
  );
};

export default AppShell;
