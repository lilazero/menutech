import MenuList from './components/MenuList';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import AskLogin from './components/AskLogin';

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  var id = 'Autiku dhe Mato';
  if (user) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <MenuList />
      </main>
    );
  } else {
    return <AskLogin />;
  }
}
