import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import MaxWidthWrapper from './MaxWidthWrapper';
import { getXataClient } from '@/xata';
import AdminEditButton from './ui/AdminEditButton';
import { getProductsByBusinessName } from '@/lib/DataAccess';
import { ProductCategorySelector } from '@/app/components/ProductCategorySelector';
import ProtectedComponent from './ProtectedComponent';
async function ProductTable({ businessRecord }: { businessRecord: any }) {
  //
  const xata = getXataClient();
  const productListByBusinessName = await getProductsByBusinessName({
    businessName: businessRecord.businessName,
  });

  //
  return (
    <MaxWidthWrapper>
      <Card>
        <CardHeader>
          <div className='flex'>
            <div>
              <CardTitle>Products</CardTitle>
              <CardDescription>{businessRecord.businessName}</CardDescription>
            </div>
            <ProductCategorySelector
              params={JSON.parse(JSON.stringify(productListByBusinessName))}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='hidden w-[100px] sm:table-cell'>
                  <span className='sr-only'>Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>

                <TableHead>
                  <span className='sr-only'>Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            {productListByBusinessName.map((product) => (
              <TableBody key={product.ProductName}>
                <TableRow>
                  <TableCell
                    about='Image cell'
                    className='hidden sm:table-cell'
                  >
                    <Image
                      src={product.ProductImage?.url ?? '/placeholder.svg'}
                      width={60}
                      height={60}
                      alt={product.ProductImage?.name ?? 'Product Image'}
                    />
                  </TableCell>
                  <TableCell className='font-medium'>
                    {product.ProductName}
                  </TableCell>
                  <TableCell>{product.ProductPrice} Euro</TableCell>
                  <ProtectedComponent>
                    <AdminEditButton productID={product.id} />
                  </ProtectedComponent>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </CardContent>
        <CardFooter>
          <div className='text-xs text-muted-foreground'>
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}

export default ProductTable;
