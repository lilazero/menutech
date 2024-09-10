import { ProductsRecord } from '@/xata';
const ProduktetComponent = ({ produktet }: { produktet: ProductsRecord }) => {
  return (
    <div className='p-2 border rounded-lg'>
      <div className='ml-4 flex justify-between'>
        <header className='flex '>
          <h5 className='font-medium'> {produktet.ProductName}</h5>
          <p className='mx-2 font-light'>|</p>
        </header>
        <p className='font-medium text-zinc-500 '>{produktet.ProductPrice}</p>
        {/* <p className='mb-2 text-sm text-zinc-500'>{produktet.productCreator}</p> */}
      </div>
    </div>
  );
};

export default ProduktetComponent;
