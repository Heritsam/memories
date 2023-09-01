import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';

import landing from '../assets/landing.png';

const Root = () => {
  return (
    <main
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className='h-screen text-white'
    >
      <div className='container mx-auto flex h-full flex-col py-4'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export default Root;
