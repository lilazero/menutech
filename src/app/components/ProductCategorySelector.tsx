'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ProductCategorySelector({ params }: { params: any }) {
  const productListByBusinessName = params;
  return (
    <>
      <div className=' ml-auto'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {productListByBusinessName.map((product: any) => (
                <SelectItem
                  value={`${product.ProductCategory}`}
                  key={product.ProductCategory}
                >
                  {product.ProductCategory}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
