import ProduktetComponent from './ProduktetComponent';
import { getXataClient } from '../../xata';

async function MenuList() {
  const xata = getXataClient();
  const produktetList = await xata.db.Produktet.getAll();
  return (
    <section className='px-2 py-4 mt-6 border-t border-t-zinc-200 border'>
      {' '}
      Product list
      {produktetList.length < 1 ? (
        <p className='text-sm text-center text-zinc-500'>S'ka produktet</p>
      ) : (
        produktetList.map((produktet) => (
          <ProduktetComponent produktet={produktet} key={produktet.id} />
        ))
      )}
    </section>
  );
}

export default MenuList;
