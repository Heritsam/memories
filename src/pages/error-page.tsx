import Button from '@/components/ui/button';

const ErrorPage = () => {
  return (
    <section className='flex h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-white'>
      <h1 className='mb-2 text-4xl font-bold text-slate-200'>Oops!</h1>
      <p className='mb-4 text-lg text-slate-300'>Halaman yang kamu cari tidak ditemukan.</p>

      <a href='/'>
        <Button variant='link' className='flex text-slate-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-5 w-5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          <span>Kembali</span>
        </Button>
      </a>
    </section>
  );
};

export default ErrorPage;