import { ProduktetRecord } from '@/xata';

const TodoComp = ({ produktet }: { produktet: ProduktetRecord }) => {
  return (
    <div className='flex p-2 mb-2 border rounded-lg'>
      ProduktetComponent.tsx
      <div className='ml-4'>
        <header className='flex items-center mb-2'>
          <h5 className='font-medium'> {produktet.productName}</h5>
          <p className='mx-1 font-light'>|</p>
          <p className='text-sm'>{produktet.xata.createdAt.toDateString()}</p>
        </header>
        <p className='mb-2 text-sm text-zinc-500'>{produktet.productPrice}</p>
        <div className='flex items-center gap-4'></div>
      </div>
    </div>
  );
};

export default TodoComp;
