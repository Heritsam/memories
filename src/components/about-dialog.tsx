import memories from '../assets/memories.png';
import instagram from '../assets/icons/instagram.png';
import ariqheritsa from '../assets/teams/ariqheritsa.png';
import akbarprakoso from '../assets/teams/akbarprakoso.png';
import agunghadi from '../assets/teams/agunghadi.png';
import elsivinalsy from '../assets/teams/elsivinalsy.png';
import krisnaaprileo from '../assets/teams/krisnaaprileo.png';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import AvatarTeam from './custom/avatar-team';
import Button from './ui/button';

type Props = {
  children: React.ReactNode;
};

const AboutDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className='bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl w-20 cursor-pointer shadow-xl hover:shadow-lg'>
        {children}
      </DialogTrigger>

      <DialogContent className='bg-slate-700'>
        <div className='flex flex-col justify-center items-center mt-4 mb-10'>
          <img src={memories} alt='memories' className='h-20 mx-auto' />

          <h4 className='text-center text-lg text-gray-300 font-bold uppercase'>
            Tentang
          </h4>

          <p className='text-center text-xs text-gray-400 font-medium w-5/6 mb-4'>
            Memories (Monitor Education Using Monitor Intelligence System) merupakan inovasi teknologi berupa <b className='font-bold text-gray-100'>monitor pintar</b> yang berperan sebagai pemandu museum untuk memperoleh informasi yang relevan.
          </p>

          <h4 className='text-center text-lg text-gray-300 font-bold uppercase mb-3'>Anggota Tim</h4>

          <div className='flex flex-wrap justify-center gap-4 gap-x-4 mb-4'>
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

          <h4 className='text-center text-lg text-gray-300 font-bold uppercase mb-1'>Ikuti Kami</h4>

          <div className='flex'>
            <a href='https://instagram.com/memories.pkmkc' target='_blank'>
              <Button variant='link'>
                <img src={instagram} className='w-6 mr-2' />
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