import landing from '../assets/landing.png';

const Screensaver = () => {
  return (
    <div
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className="fixed h-screen w-screen"
    >
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold">Memories</h1>
        <p className="text-slate-400">Ini screensaver</p>
      </div>
    </div>
  );
};

export default Screensaver;
