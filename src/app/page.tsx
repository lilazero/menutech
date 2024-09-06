import MenuList from './components/MenuList';
import { SignIn, useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import AskLogin from './components/AskLogin';
import { BusinessList } from './components/BusinessList';

export default function Home() {
  const authInstance = auth();
  if (authInstance.protect()) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <BusinessList />
      </main>
    );
  } else {
    return <AskLogin />;
  }
}
