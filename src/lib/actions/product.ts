'use server';

import { ProductService } from '../services/productService';
import { XataClient } from '@/xata';
import { ProductData, Category } from '@/types/product';
import { ApiResponse } from '@/types/api';

const productService = new ProductService(new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main'
}));

export async function updateProductAction(
  id: string, 
  data: Partial<ProductData>
): Promise<ApiResponse<ProductData>> {
  try {
    return await productService.updateProduct(id, data);
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update product'
    };
  }
}

export async function getProductAction(id: string): Promise<ProductData> {
  return await productService.getProduct(id);
}

export async function getCategoriesAction(): Promise<Category[]> {
  return await productService.getCategories();
}
