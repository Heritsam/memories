import qrMemories from '../assets/qrMemories.png';

const SurveyPage = () => {
  return (
    <section className="h-full">
      <div className="h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 px-8 py-4 shadow-xl">
        <div className="grid h-full grid-cols-12 gap-12">
          <div className="col-span-4 flex h-full flex-col items-center justify-center">
            <img src={qrMemories} alt="QR CODE" className="mb-3 shadow-lg" />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQrCuHGiDjbX2bYIBBTMmTGaaFfqDSmNQ_pTdKLbakFCL-5w/viewform"
              target="_blank"
              className="text-sm text-slate-400"
            >
              Link alternatif
            </a>
          </div>
          <div className="col-span-8 flex h-full flex-col justify-center">
            <h1 className="mb-4 text-5xl font-bold">Haloo Sahabat Mories!</h1>
            <p className="text-lg text-slate-300">
              Sahabat Mories, setelah menggunakan aplikasi kami, kami mengundang
              kakak untuk memberikan umpan balik kakak dengan memindai QR kode
              di bawah ini dan mengisi kuesioner singkat kami. Kontribusi kakak
              sangat berarti bagi kami dalam meningkatkan pengalaman kakak
              dengan aplikasi kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyPage;
