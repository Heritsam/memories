import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import id from '../assets/flags/id.svg';
import en from '../assets/flags/en.svg';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    const locale = localStorage.getItem('locale');
    if (locale) {
      setLanguage(locale);
    }
  }, []);

  const handleLanguageChange = (locale: string) => {
    i18n.changeLanguage(locale);
    localStorage.setItem('locale', locale);
    setLanguage(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-xl w-20 cursor-pointer'>
          <div className='flex flex-col items-center justify-center h-full gap-2'>
            {language === 'en' ? (
              <>
                <img src={en} className='w-6 rounded' />
                <span className='text-gray-200 text-sm'>Language</span>
              </>
            ) : (
              <>
                <img src={id} className='w-6 rounded' />
                <span className='text-gray-200 text-sm'>Bahasa</span>
              </>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Pilih Bahasa</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => handleLanguageChange('id')}>
          <img src={id} className='w-6 rounded mr-2' />
          <span>Bahasa Indonesia</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          <img src={en} className='w-6 rounded mr-2' />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;