import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

type Props = {
  imageUrl?: string;
  alias: string;
  fullName: string;
  major: string;
  ketua?: boolean;
};

const AvatarTeam = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className='h-[56px] rounded-lg border border-slate-900/20 bg-black/10 px-4 py-2'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <Avatar>
            <AvatarImage src={props.imageUrl} />
            <AvatarFallback className='text-xs'>{props.alias}</AvatarFallback>
          </Avatar>

          <div className='font-medium text-white'>
            <h2 className='text-ellipsis text-sm font-medium'>{props.fullName}</h2>
            <h3 className='text-sm text-gray-500 dark:text-gray-400'>{props.major}</h3>
          </div>
        </div>

        {props.ketua && (
          <div className='rounded-full bg-gradient-to-tr from-sky-500  to-indigo-600 px-3 py-1 text-xs font-medium text-white'>
            {t('leader')}
          </div>
        )}
      </div>
    </div >
  );
};

export default AvatarTeam;