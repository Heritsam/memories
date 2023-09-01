import { useTranslation } from 'react-i18next';

import memories from '../assets/memories.png';
import instagram from '../assets/icons/instagram.png';
import ariqheritsa from '../assets/teams/ariqheritsa.png';
import akbarprakoso from '../assets/teams/akbarprakoso.png';
import agunghadi from '../assets/teams/agunghadi.png';
import elsivinalsy from '../assets/teams/elsivinalsy.png';
import krisnaaprileo from '../assets/teams/krisnaaprileo.png';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import AvatarTeam from './ui/avatar-team';
import Button from './ui/button';

type Props = {
  children: React.ReactNode;
};

const AboutDialog = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger className='w-20 cursor-pointer rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl hover:shadow-lg'>
        {children}
      </DialogTrigger>

      <DialogContent className='bg-slate-700'>
        <div className='mb-10 mt-4 flex flex-col items-center justify-center'>
          <img src={memories} alt='memories' className='mx-auto h-20' />

          <h4 className='text-center text-lg font-bold uppercase text-gray-300'>
            {t('about')}
          </h4>

          <p className='mb-4 w-5/6 text-center text-xs font-medium text-gray-400'>
            Memories (Monitor Education Using Monitor Intelligence System) merupakan inovasi teknologi berupa <b className='font-bold text-gray-100'>monitor pintar</b> yang berperan sebagai pemandu museum untuk memperoleh informasi yang relevan.
          </p>

          <h4 className='mb-3 text-center text-lg font-bold uppercase text-gray-300'>
            {t('team_members')}
          </h4>

          <div className='mb-4 flex flex-wrap justify-center gap-4'>
            <div className='w-[100%]'>
              <AvatarTeam
                imageUrl={agunghadi}
                alias='AHW'
                fullName='Agung Hadi Winoto'
                major='S1 Data Sains'
                ketua={true}
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl={krisnaaprileo}
                alias='KAI'
                fullName='Krisna Aprileo'
                major='S1 Akuntansi'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl={elsivinalsy}
                alias='EVC'
                fullName='Elsi Vinalsy'
                major='S1 Akuntansi'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl={ariqheritsa}
                alias='AHM'
                fullName='Ariq Heritsa'
                major='S1 Data Sains'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl={akbarprakoso}
                alias='AKB'
                fullName='Akbar Prakoso'
                major='S1 Informatika'
              />
            </div>
          </div>

          <h4 className='mb-1 text-center text-lg font-bold uppercase text-gray-300'>
            {t('follow_us')}
          </h4>

          <div className='flex'>
            <a href='https://instagram.com/memories.pkmkc' target='_blank'>
              <Button variant='link'>
                <img src={instagram} className='mr-2 w-6' />
                @memories.pkmkc
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;