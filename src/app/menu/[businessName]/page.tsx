import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ProductTable from '../../../components/ProductTable';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton } from '../../../components/ui/skeletons';
async function BusinessNamePage({
  params: businessRecord,
}: {
  params: { businessName: any };
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className='w-auto  border  pt-10
            flex flex-col overflow-y-auto min-h-screen'
          >
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <ProductTable businessRecord={businessRecord} />{' '}
            </Suspense>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>[businessName]/page.tsx</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default BusinessNamePage;
