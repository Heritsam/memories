import { useRef } from 'react';

import landing from '../assets/landing.png';

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
          width={width.current}
          height={height.current}
          autoPlay={true}
          loop={true}
          className="m-8 rounded-xl shadow-2xl"
        >
          <source src="https://rr4---sn-npoe7nsy.c.drive.google.com/videoplayback?expire=1696398067&ei=w9AcZaSBN9aOzN0P-LWz-A0&ip=203.190.54.126&id=1ee9e97f00ca073e&itag=37&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=my&mm=32&mn=sn-npoe7nsy&ms=su&mv=m&mvi=4&pl=24&ttl=transient&susc=dr&driveid=17p2btUupx-K1mIkE0hz89yLr3N5JFSLS&app=explorer&eaua=B6nAP4UNIos&mime=video/mp4&vprv=1&prv=1&dur=45.116&lmt=1696371769353303&mt=1696387025&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgI3cI5L5WCaWdxXpCJlF92hDeLus7RyBAKDnkF-ErFucCIH_XhzpksLF-Q3KbTQa31Er2H1_rayWl6gN7Xg8XVk0k&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgPEaDci9NXVheWiUG7PULipLtALJ6mVw_EFiYjZTLSJcCIHgPN6GkVKnSnvp9L4cJIUcefnppBcWbneA3BUy3crrb&cpn=wcZ8RamzxQOEK_DI&c=WEB_EMBEDDED_PLAYER&cver=1.20230926.01.00" />
        </video>
      </div>
    </div>
  );
};

export default Screensaver;
