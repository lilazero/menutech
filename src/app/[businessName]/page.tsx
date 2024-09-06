import { getXataClient } from '@/xata';
import ProduktetComponent from '../components/ProduktetComponent';

export default async ({ params }: { params: any }) => {
  const xata = getXataClient();

  const productListByBusinessName = await xata.db.Produktet.filter({
    productCreator: params.businessName,
  }).getMany();

  return (
    <div>
      {productListByBusinessName.map((product) => (
        <div
          className='grid grid-flow-row grid-cols-4'
          key={product.productName}
        >
          <ProduktetComponent key={product.productName} produktet={product} />
        </div>
      ))}
    </div>
  );
};
