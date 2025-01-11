'use client';
import { Category } from '@/types/product';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

interface CategorySelectProps {
  value: string;
  onValueChange: (value: string) => void;
  categories: Category[];
}

export function CategorySelect({ 
  value, 
  onValueChange, 
  categories 
}: CategorySelectProps) {
  const validCategories = categories.filter((cat): cat is Category => 
    typeof cat.name === 'string' && cat.name.length > 0
  );

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {validCategories.map((category) => (
          <SelectItem key={category.id} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
