import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

const useScreensaver = () => {
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

    navigate('/landing');
  };

  const onAction = () => {
    setCount(count + 1);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 60_000, // 1 minute
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

  return { remaining, count, showScreensaver };
};

export default useScreensaver;
