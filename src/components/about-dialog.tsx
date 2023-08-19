import memories from '../assets/memories.png';
import heritsam from '../assets/teams/heritsam.jpg';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import AvatarTeam from './custom/avatar-team';

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
                imageUrl='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
                alias='AHW'
                fullName='Agung Hadi Winoto'
                major='S1 Data Sains'
                ketua={true}
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
                alias='KAI'
                fullName='Krisna Aprileo'
                major='S1 Akuntansi'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
                alias='AHW'
                fullName='Elsi Vinalsy'
                major='S1 Akuntansi'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl={heritsam}
                alias='KAI'
                fullName='Ariq Heritsa'
                major='S1 Data Sains'
              />
            </div>

            <div className='w-[48%]'>
              <AvatarTeam
                imageUrl='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80'
                alias='AHW'
                fullName='Akbar Prakoso'
                major='S1 Informatika'
              />
            </div>
          </div>

          <h4 className='text-center text-lg text-gray-300 font-bold uppercase mb-3'>Ikuti Kami</h4>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;