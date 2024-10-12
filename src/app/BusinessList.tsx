import { getXataClient } from '@/xata';
import MaxWidthWrapper from './components/MaxWidthWrapper';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
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
import Link from 'next/link';

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

export async function BusinessList() {
  const xata = getXataClient();
  const businessRecord = await xata.db.BUSINESSES.getAll();
  const BusinessChoice = '';

  return (
    <section className='px-2 py-1 border-t border-t-zinc-200 border'>
      <MaxWidthWrapper>
        <Card>
          <CardHeader>
            <div className='flex'>
              <div>
                <CardTitle>Businesses</CardTitle>
                <CardDescription>Choose a menu manually</CardDescription>
              </div>
              <div className=' ml-auto'>
                <Select>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select a Business Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>BusinessType</SelectLabel>
                      {businessRecord.map((p) => (
                        <SelectItem
                          key={p.id}
                          value={`${p.id}`}
                          id={`${BusinessChoice}`}
                        >
                          {p.BusinessType}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className=' '>
                  <TableHead className='hidden w-[100px] sm:table-cell'>
                    <span className='sr-only'>Image</span>
                  </TableHead>
                  <TableHead className=' ml-auto text-center'>
                    <span className=' '>Name</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              {businessRecord.map((creator) => (
                <TableBody className=' ' key={creator.id}>
                  <TableRow className='  '>
                    <TableCell className='size-32 sm:table-cell'>
                      <img
                        src={creator.BusinessLogoLink ?? 'no image'}
                        width={60}
                        height={60}
                        alt={creator.BusinessName ?? 'no image'}
                      />
                    </TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <TableCell className='font-medium text-center text-[60px]'>
                            <Link
                              href={{
                                pathname: 'menu/[businessName]',
                              }}
                              as={`menu/${creator.BusinessName}`}
                            >
                              <h5 className='font-medium'>
                                {' '}
                                {creator.BusinessName}
                              </h5>
                            </Link>
                          </TableCell>
                        </TooltipTrigger>
                        <TooltipContent>{creator.BusinessType}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
      </MaxWidthWrapper>{' '}
    </section>
  );
}
