import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
    <div className='bg-black/10 border border-slate-900/20 py-2 px-4 rounded-lg h-[56px]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-2'>
          <Avatar>
            <AvatarImage src={props.imageUrl} />
            <AvatarFallback className='text-xs'>{props.alias}</AvatarFallback>
          </Avatar>

          <div className='font-medium text-white'>
            <h2 className='text-sm font-medium text-ellipsis'>{props.fullName}</h2>
            <h3 className='text-sm text-gray-500 dark:text-gray-400'>{props.major}</h3>
          </div>
        </div>

        {props.ketua && (
          <div className='bg-gradient-to-tr from-sky-500 to-indigo-600  text-white text-xs font-medium px-3 py-1 rounded-full'>
            {t('leader')}
          </div>
        )}
      </div>
    </div >
  );
};

export default AvatarTeam;