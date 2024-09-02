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
            href='/api/auth/login'
            className='text-green-600 transition-colors sm:text-xl md:text-5xl hover:text-green-700 animated-underline'
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
