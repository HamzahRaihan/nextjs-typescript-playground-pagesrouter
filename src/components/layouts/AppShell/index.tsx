import React from 'react';
import Navbar from '../Navbar';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center container">{children}</div>
    </main>
  );
};

export default AppShell;
