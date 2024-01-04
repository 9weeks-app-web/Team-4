'use client';
import React, { ReactNode } from 'react';
import SideBar from './(components)/SideBar';
import SideWrite from './(components)/SideWrite';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  if (pathname === '/community/post') {
    return (
      <div className="flex justify-center items-center mt-[25px]">
        <main className=" w-[1200px] p-4">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <SideBar />
      <SideWrite />
      <main className=" w-[997px]">{children}</main>
    </div>
  );
};

export default Layout;
