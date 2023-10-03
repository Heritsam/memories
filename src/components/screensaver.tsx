import { useRef } from 'react';

import landing from '../assets/landing.png';
import tutorial from '../assets/videos/tutorial.mp4';

const Screensaver = () => {
  const width = useRef(window.innerWidth);
  const height = useRef(window.innerHeight);

  return (
    <div
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className="fixed h-screen w-screen"
    >
      <div className="flex h-full items-center justify-center">
        <video
          width={width.current - 128}
          height={height.current - 128}
          autoPlay={true}
          loop={true}
          className="m-8 rounded-xl shadow-2xl"
        >
          <source src={tutorial} />
        </video>
      </div>
    </div>
  );
};

export default Screensaver;
