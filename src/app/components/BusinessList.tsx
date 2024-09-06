import { getXataClient, ProductCreatorRecord, ProduktetRecord } from '@/xata';
import ProduktetComponent from '../components/ProduktetComponent';
import { XataRecord } from '@xata.io/client';
import BusinessComponent from './BusinessComponent';

export async function BusinessList() {
  const xata = getXataClient();
  const creatorList = await xata.db.productCreator.getAll();
  return (
    <section className='px-2 py-4 mt-6 border-t border-t-zinc-200 border'>
      {' '}
      BusinessList.tsx
      {creatorList && creatorList.length < 1 ? (
        <p className='text-sm text-center text-zinc-500'>S'ka produkte</p>
      ) : (
        creatorList.map((creator) => (
          <BusinessComponent creator={creator} key={creator.id} />
        ))
      )}
    </section>
  );
}
