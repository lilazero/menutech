import { ProductCreatorRecord, ProduktetRecord } from '@/xata';
const ProduktetComponent = ({ produktet }: { produktet: ProduktetRecord }) => {
  return (
    <div className='p-2 border rounded-lg'>
      <div className='ml-4 flex justify-between'>
        <header className='flex '>
          <h5 className='font-medium'> {produktet.productName}</h5>
          <p className='mx-2 font-light'>|</p>
        </header>
        <p className='font-medium text-zinc-500 '>{produktet.productPrice}</p>
        {/* <p className='mb-2 text-sm text-zinc-500'>{produktet.productCreator}</p> */}
      </div>
    </div>
  );
};

export default ProduktetComponent;
