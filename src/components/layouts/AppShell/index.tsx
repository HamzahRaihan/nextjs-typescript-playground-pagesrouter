import React from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const disableNav = ['/auth/login', '/auth/register'];
  return (
    <main>
      {!disableNav.includes(pathname) && <Navbar />}
      <div className="flex flex-col justify-center container">{children}</div>
    </main>
  );
};

export default AppShell;
