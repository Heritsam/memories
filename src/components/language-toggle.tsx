import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from '../assets/flags/cn.svg';
import en from '../assets/flags/en.svg';
import id from '../assets/flags/id.svg';
import jp from '../assets/flags/jp.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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
        <div className="w-20 cursor-pointer rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl">
          <div className="flex h-full flex-col items-center justify-center gap-2">
            {language === 'en' ? (
              <img src={en} className="w-6 rounded" />
            ) : null}

            {language === 'id' ? (
              <img src={id} className="w-6 rounded" />
            ) : null}

            {language === 'ja' ? (
              <img src={jp} className="w-6 rounded" />
            ) : null}

            {language === 'zh' ? (
              <img src={cn} className="w-6 rounded" />
            ) : null}

            <span className="text-sm text-gray-200">{t('language')}</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pilih Bahasa</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => handleLanguageChange('id')}>
          <img src={id} className="mr-2 w-6 rounded" />
          <span>Bahasa Indonesia</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          <img src={en} className="mr-2 w-6 rounded" />
          <span>English</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleLanguageChange('ja')}>
          <img src={jp} className="mr-2 w-6 rounded" />
          <span>日本語</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleLanguageChange('zh')}>
          <img src={cn} className="mr-2 w-6 rounded" />
          <span>中文</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
