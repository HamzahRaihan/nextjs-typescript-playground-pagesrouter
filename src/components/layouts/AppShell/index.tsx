import React from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const disableNav = ['/auth/login', '/auth/register', '/404'];
  return (
    <main>
      {!disableNav.includes(pathname) && <Navbar />}
      <div className="container flex flex-col justify-center">{children}</div>
    </main>
  );
};

export default AppShell;
