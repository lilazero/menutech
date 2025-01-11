export interface ProductData {
  id: string;
  ProductName: string | null;
  ProductPrice: string | null;
  ProductCategory: string | null;
  ProductImage?: {
    url: string;
    name: string;
  } | null;
}

export interface Category {
  id: string;
  name: string;
}

// Add type guard
export function isValidCategory(category: unknown): category is Category {
  return (
    typeof category === 'object' &&
    category !== null &&
    'id' in category &&
    'name' in category &&
    typeof category.id === 'string' &&
    typeof category.name === 'string' &&
    category.id !== '' &&
    category.name !== ''
  );
}
