import landing from './assets/landing.png';
import microphone from './assets/icons/microphone.svg';

import Navbar from './components/navbar';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main
        style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
        className='h-screen text-white'
      >
        <div className='container mx-auto py-4 flex flex-col h-full'>
          <Navbar />
          
          <div className='grid grid-flow-row grid-cols-3 gap-4 h-full'>
            <div className='col-span-2 bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl rounded-lg py-4 px-6'>
              asd
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
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
