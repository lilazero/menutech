import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { ThemeSelector } from './ui/theme-picker';
import { ThemeSwitcher } from './ui/theme-switcher';

function Navbar() {
  return (
    <nav className='sticky z-[0] h-14 inset-x-0 top-0 w-full border-b border-gray-200 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between  border-b h-14 border-zinc-200'>
          <Link href='/' className='z-40 flex font-semibold'>
            Menu<span className='text-red-800'>Tech</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
