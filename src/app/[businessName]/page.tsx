import { getXataClient } from '@/xata';
import ProduktetComponent from '../components/ProduktetComponent';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ProduktetList from '../components/ui/ProduktetList';
export default async ({ params }: { params: any }) => {
  const xata = getXataClient();

  const productListByBusinessName = await xata.db.Produktet.filter({
    productCreator: params.businessName,
  }).getMany();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className='w-auto  border  pt-10
            flex flex-col overflow-y-auto min-h-screen

          '
          >
            <ProduktetList params={params} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>[businessName]/page.tsx</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
