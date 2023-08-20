import microphone from '../assets/icons/microphone.svg';

const AskPage = () => {
  return (
    <section className='h-full'>
      <div className='grid grid-flow-row grid-cols-3 gap-4 h-full'>
        <div className='col-span-2 bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl rounded-lg py-4 px-6'>
          <div className='flex flex-col'>

          </div>
        </div>

        <div className='col-span-1 bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl rounded-lg py-4 px-6'>
          <div className='flex flex-col items-center justify-center gap-6 h-full'>
            <button className='bg-gradient-to-br from-sky-500 to-indigo-500 p-8 rounded-full shadow-lg hover:shadow-md'>
              <img src={microphone} />
            </button>

            <p className='text-2xl font-bold'>Tekan untuk berbicara</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskPage;