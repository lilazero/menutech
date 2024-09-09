import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getXataClient, ProduktetRecord } from '@/xata';
import MaxWidthWrapper from '../MaxWidthWrapper';

export default async function Component({ params }: { params: any }) {
  const xata = getXataClient();

  const productListByBusinessName = await xata.db.Produktet.filter({
    productCreator: params.businessName,
  }).getMany();

  return (
    <MaxWidthWrapper>
      <Card>
        <CardHeader>
          <div className='flex'>
            <div>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </div>
            <div className=' ml-auto'>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select a category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value='beverages'>Beverages</SelectItem>
                    <SelectItem value='oven'>Oven</SelectItem>
                    <SelectItem value='categoryPlaceholder1'>
                      CategoryPlaceholder1
                    </SelectItem>
                    <SelectItem value='categoryPlaceholder2'>
                      CategoryPlaceholder2
                    </SelectItem>
                    <SelectItem value='salads'>Salads</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
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
              <TableBody key={product.productName}>
                <TableRow>
                  <TableCell className='hidden sm:table-cell'>
                    <Image
                      alt='Product image'
                      className='aspect-auto rounded-[0.1rem]  '
                      height='40'
                      src='next.svg'
                      width='100'
                    />
                  </TableCell>
                  <TableCell className='font-medium'>
                    {product.productName}
                  </TableCell>
                  <TableCell>{product.productPrice} Euro</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup='true'
                          size='icon'
                          variant='ghost'
                        >
                          <MoreHorizontal className='h-4 w-4' />
                          <span className='sr-only'>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
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
