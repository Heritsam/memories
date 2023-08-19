import landing from './assets/landing.png';

import Navbar from './components/navbar';
import { ThemeProvider } from './components/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main
        style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
        className='h-screen text-white'
      >
        <div className='container mx-auto py-4 h-full'>

          <Navbar />

          <div className='flex flex-row gap-4 h-max'>
            <div className='bg-gradient-to-br from-slate-700 to-slate-800 w-2/3 shadow-xl rounded-lg py-4 px-6'>
              asd
            </div>

            <div className='bg-gradient-to-br from-slate-700 to-slate-800 w-1/3 shadow-xl rounded-lg py-4 px-6'>
              asd
            </div>
          </div>

        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
