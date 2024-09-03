import Link from 'next/link';

function AskLogin() {
  return (
    <main
      style={{
        backgroundImage: "url('/backgrounds/HeroBackground.png')",
      }}
    >
      <div className='backdrop-blur-[2px] h-full w-full items-center justify-center flex min-h-[90vh] bg-white bg-opacity-80'>
        <h1 className='font-bold sm:text-xl md:text-4xl bg-slate-50 bg-opacity-70'>
          Please{' '}
          <Link
            href='/'
            className='text-red-600 transition-colors sm:text-xl md:text-5xl hover:text-red-800 animated-underline'
          >
            Login
          </Link>{' '}
          to continue
        </h1>
      </div>
    </main>
  );
}

export default AskLogin;
