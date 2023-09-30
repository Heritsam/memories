import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Outlet, useNavigate } from 'react-router-dom';

import Navbar from '@/components/navbar';
import Screensaver from '@/components/screensaver';

import landing from '../assets/landing.png';

const Root = () => {
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(0);
  const [count, setCount] = useState(0);
  const [showScreensaver, setShowScreensaver] = useState(false);

  const onIdle = () => {
    console.log('User is idle');
    setShowScreensaver(true);
  };

  const onActive = () => {
    console.log('User is active');

    // delay 3 seconds before hiding screensaver
    setTimeout(() => {
      setShowScreensaver(false);
    }, 1500);

    // TODO: navigate to microphone page
    navigate('/');
  };

  const onAction = () => {
    setCount(count + 1);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 180_000, // 3 minutes
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));

      if (import.meta.env.DEV && remaining % 10 === 0) {
        console.log(`Remaining time: ${remaining}`);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

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
