import { BusinessList } from './components/BusinessList';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <BusinessList />
    </main>
  );
}
