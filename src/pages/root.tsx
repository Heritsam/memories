import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';

import landing from '../assets/landing.png';

const Root = () => {
  const [remaining, setRemaining] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const onIdle = () => {
    console.log('User is idle');
  };

  const onActive = () => {
    console.log('User is active');
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
      <div className="container mx-auto flex h-full flex-col py-4">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
