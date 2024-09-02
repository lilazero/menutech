import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const AuthControlButtons = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return (
      <div>
        <Link href='/api/auth/logout'>Sign out</Link>
      </div>
    );
  }
  return (
    <div className='flex items-center space-x-4'>
      <Link href='/api/auth/login'>Login</Link>
      <Link href='/api/auth/register'>Sign up</Link>
    </div>
  );
};

export default AuthControlButtons;
