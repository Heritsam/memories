import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import memories from '../assets/memories.png';

import Button from './ui/button';
import AboutDialog from './about-dialog';
import LanguageToggle from './language-toggle';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className='mb-4 flex flex-row justify-between'>
      <div className='w-40'></div>

      <div className='rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl'>
        <div className='flex flex-row items-center justify-center gap-4 px-8 py-2'>
          <Link to='/'>
            <Button variant={location.pathname == '/' ? 'defaultGradient' : 'secondary'}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
                <path d='M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z' />
                <path d='M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z' />
              </svg>

              <span className='ml-2'>{t('ask')}</span>
            </Button>
          </Link>

          <img src={memories} alt='memories' className='h-16' />

          <Link to='/history'>
            <Button variant={location.pathname == '/history' ? 'defaultGradient' : 'secondary'}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z' clipRule='evenodd' />
              </svg>

              <span className='ml-2'>{t('history')}</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className='flex flex-row gap-4'>
        <LanguageToggle />

        <AboutDialog>
          <div className='flex h-full flex-col items-center justify-center gap-1'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
              <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z' clipRule='evenodd' />
            </svg>

            <span className='text-sm text-gray-200'>{t('about')}</span>
          </div>
        </AboutDialog>
      </div>
    </nav>
  );
};

export default Navbar;