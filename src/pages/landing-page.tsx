import { Link } from 'react-router-dom';

import microphone from '../assets/icons/microphone.svg';
import landing from '../assets/landing.png';
import kemdikbud from '../assets/logos/kemdikbud.png';
import pkm_white from '../assets/logos/pkm_white.png';
import simbelmawa from '../assets/logos/simbelmawa.png';

const LandingPage = () => {
  return (
    <main
      style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover' }}
      className="h-screen text-white"
    >
      <section className="container mx-auto flex h-full flex-col items-center justify-center px-20">
        <Link to="/">
          <button
            type="button"
            title="mic-start-button"
            className="mb-4 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 p-10 shadow-lg transition-all hover:shadow-md"
          >
            <img src={microphone} alt="microphone" />
          </button>
        </Link>

        <h1 className="mb-2 text-center text-3xl font-bold">
          Haloo Teman Mories!
        </h1>
        <h4 className="text-lg text-slate-400">
          Tekan tombol di atas untuk bertanya apapun tentang Musem Konferensi
          Asia Afrika
        </h4>
      </section>

      <div className="absolute left-1/2 top-14 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-row items-center gap-6">
          <img src={kemdikbud} alt="Kemdikbud" className="h-12" />
          <img src={pkm_white} alt="PKM-KC" className="h-16" />
          <img src={simbelmawa} alt="Simbelmawa" className="w-24" />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
