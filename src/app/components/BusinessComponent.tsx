import { ProductCreatorRecord } from '@/xata';
import Link from 'next/link';

const BusinessComp = ({ creator }: { creator: ProductCreatorRecord }) => {
  return (
    <div className='flex p-2 mb-2 border rounded-lg'>
      BusinessComponent.tsx
      <div className='ml-4'>
        <header className='flex items-center mb-2'>
          <Link
            href={{
              pathname: '/[businessName]',
            }}
            as={`/${creator.productCreatorName}`}
          >
            <h5 className='font-medium'> {creator.productCreatorName}</h5>
          </Link>
          <p className='mx-1 font-light'>|</p>
        </header>
        <p className='mb-2 text-sm text-zinc-500'>{creator.creatorType}</p>
        <div className='flex items-center gap-4'></div>
      </div>
    </div>
  );
};

export default BusinessComp;
