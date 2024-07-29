// src/Components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
  return (
    <div>
      <Nav />
      <main className='h-[100vh] w-[100vw]'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
