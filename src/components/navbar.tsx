import { useState } from 'react';
import memories from '../assets/memories.png';

import Button from './ui/button';
import AboutDialog from './about-dialog';

type Menu = 'tanya' | 'chat';

const Navbar = () => {
  const [menu, setMenu] = useState<Menu>('tanya');

  const handleMenu = (menu: Menu) => {
    setMenu(menu);
  };

  return (
    <div className='flex flex-row justify-between mb-4'>
      <div className='w-20'></div>

      <div className='bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-xl'>
        <div className='flex flex-row justify-center items-center gap-4 py-2 px-8'>
          <Button
            onClick={() => handleMenu('tanya')}
            variant={menu === 'tanya' ? 'defaultGradient' : 'secondary'}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path d='M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z' />
              <path d='M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z' />
            </svg>

            <span className='ml-2'>Tanya</span>
          </Button>

          <img src={memories} alt='memories' className='h-16' />

          <Button
            onClick={() => handleMenu('chat')}
            variant={menu === 'chat' ? 'defaultGradient' : 'secondary'}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path fillRule='evenodd' d='M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z' clipRule='evenodd' />
            </svg>

            <span className='ml-2'>Chat</span>
          </Button>
        </div>
      </div>

      <AboutDialog>
        <div className='flex flex-col items-center justify-center h-full gap-1'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z' clipRule='evenodd' />
          </svg>

          <span className='text-gray-200 text-sm'>Tentang</span>
        </div>
      </AboutDialog>
    </div>
  );
};

export default Navbar;