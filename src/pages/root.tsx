import { Outlet } from 'react-router-dom';
import landing from '../assets/landing.png';

import Navbar from '@/components/navbar';

function Root() {
  return (
    <main
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className='h-screen text-white'
    >
      <div className='container mx-auto py-4 flex flex-col h-full'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export default Root;
