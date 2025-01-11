'use client';
import { updateProductAction } from '@/lib/actions/product';
import { ProductData, Category } from '@/types/product';
import { useState } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { CategorySelect } from './CategorySelect';

interface ProductProps {
  initialProduct: ProductData;
  categories: Category[];
}

export function Product({ initialProduct, categories }: ProductProps) {
  const [product, setProduct] = useState(initialProduct);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: keyof ProductData) => (value: string) => {
    setProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const updateData: Partial<ProductData> = {};
      
      if (product.ProductName !== null) {
        updateData.ProductName = product.ProductName || '';
      }
      if (product.ProductPrice !== null) {
        updateData.ProductPrice = product.ProductPrice || '0';
      }
      if (product.ProductCategory !== null) {
        updateData.ProductCategory = product.ProductCategory || 'Misc.';
      }

      const result = await updateProductAction(product.id, updateData);
      
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      
      setProduct(result.data);
      toast.success('Product updated successfully');
    } catch (error) {
      toast.error('Failed to update product');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Input
            value={product.ProductName || ''}
            onChange={e => handleChange('ProductName')(e.target.value)}
            className="text-xl font-bold"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ProductImage 
          src={product.ProductImage?.url} 
          alt={product.ProductName || 'Product'} 
        />
        <div className="space-y-4 flex-1">
          <PriceInput
            value={product.ProductPrice || ''}
            onChange={handleChange('ProductPrice')}
          />
          <CategorySelect
            value={product.ProductCategory || 'Misc.'}
            onValueChange={handleChange('ProductCategory')}
            categories={categories}
          />
        </div>
        <SaveButton 
          onClick={handleSave} 
          isLoading={isLoading} 
        />
      </CardContent>
    </Card>
  );
}

// Extract smaller components for better organization
function ProductImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="w-24 h-24 relative">
      <Image
        src={src ?? '/placeholder.svg'}
        alt={alt}
        fill
        className="object-cover rounded-md"
      />
    </div>
  );
}

function PriceInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex items-center space-x-2">
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-24"
      />
      <span>Euro</span>
    </div>
  );
}

function SaveButton({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) {
  return (
    <Button 
      onClick={onClick} 
      disabled={isLoading}
      className="w-full"
    >
      {isLoading ? 'Saving...' : 'Save Changes'}
    </Button>
  );
}
