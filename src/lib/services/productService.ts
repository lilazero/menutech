import { XataClient } from '@/xata';
import { ProductData, Category, isValidCategory } from '@/types/product';
import { ApiResponse } from '@/types/api';
import type { ProductsRecord } from '@/xata';

export class ProductService {
  constructor(private xata: XataClient) {}

  private serializeProduct(product: any): ProductData {
    return {
      id: product.id ?? '',
      ProductName: product.ProductName ?? null,
      ProductPrice: product.ProductPrice ?? null,
      ProductCategory: product.ProductCategory ?? null,
      ProductImage: product.ProductImage ? {
        url: String(product.ProductImage.url ?? ''),
        name: String(product.ProductImage.name ?? '')
      } : null
    };
  }

  private serializeCategory(category: any): Category | null {
    if (!category?.id || !category?.CategoryName) return null;
    return {
      id: String(category.id),
      name: String(category.CategoryName)
    };
  }

  async getProduct(id: string): Promise<ProductData> {
    try {
      const product = await this.xata.db.PRODUCTS.read(id);
      if (!product) throw new Error('Product not found');
      return this.serializeProduct(product);
    } catch (error) {
      throw new Error(`Failed to get product: ${error}`);
    }
  }

  async getCategories(): Promise<Category[]> {
    try {
      const records = await this.xata.db['PRODUCT-CATEGORIES'].getMany();
      return records
        .map(this.serializeCategory)
        .filter((category): category is Category => isValidCategory(category));
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async updateProduct(id: string, data: Partial<ProductData>): Promise<ApiResponse<ProductData>> {
    try {
      // Remove null values and create a clean update object
      const updateData: Partial<ProductsRecord> = {};
      
      if (data.ProductName !== null && data.ProductName !== undefined) {
        updateData.ProductName = data.ProductName;
      }
      if (data.ProductPrice !== null && data.ProductPrice !== undefined) {
        updateData.ProductPrice = data.ProductPrice;
      }
      if (data.ProductCategory !== null && data.ProductCategory !== undefined) {
        updateData.ProductCategory = data.ProductCategory;
      }

      const updated = await this.xata.db.PRODUCTS.update(id, updateData);

      if (!updated) return { success: false, error: 'Product not found' };
      return { success: true, data: this.serializeProduct(updated) };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }
}
