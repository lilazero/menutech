import { getXataClient } from '@/xata';
import ProduktetComponent from '../components/ProduktetComponent';

export default async ({ params }: { params: any }) => {
  const xata = getXataClient();

  const productListByBusinessName = await xata.db.Produktet.filter({
    productCreator: params.businessName,
  }).getMany();

  return (
    <div>
      <div className='grid grid-flow-row grid-cols-4'>
        {productListByBusinessName.map((product) => (
          <ProduktetComponent key={product.productName} produktet={product} />
        ))}
      </div>
    </div>
  );
};
