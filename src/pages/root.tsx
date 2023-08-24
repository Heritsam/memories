import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';

import landing from '../assets/landing.png';

const Root = () => {
  return (
    <main
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className='h-screen text-white'
    >
      <div className='container mx-auto flex flex-col py-4 h-full'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export default Root;
