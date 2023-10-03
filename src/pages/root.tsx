import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';
import Screensaver from '@/components/screensaver';
import useScreensaver from '@/stores/screensaver/use-screensaver';

import landing from '../assets/landing.png';

const Root = () => {
  const { showScreensaver } = useScreensaver();

  return (
    <main
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className="h-screen text-white"
    >
      {showScreensaver ? <Screensaver /> : null}
      <div className="container mx-auto flex h-full flex-col py-4">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
