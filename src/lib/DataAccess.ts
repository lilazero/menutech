'use server';
import { getXataClient, XataClient } from '@/xata';
import { ProductData, Category } from '@/types/product';

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main',
});

// Add this type definition
type UpdateProductResult = {
  success: true;
  data: ProductData;
} | {
  success: false;
  error: string;
};

//
export async function getBusinessEmailByBusinessName(params: {
  businessName: string;
}) {
  const records = await xata.db.BUSINESSES.filter({
    BusinessEmail: params.businessName,
  }).getMany();
  return records;
}
//
export async function getProductsByBusinessName(params: {
  businessName: string;
}) {
  const records = await xata.db.PRODUCTS.filter({
    ProductCreator: params.businessName,
  }).getMany();

  return records;
}

// Add this helper function
function serializeProduct(product: any): ProductData {
  return {
    id: product.id,
    ProductName: product.ProductName ?? null,
    ProductPrice: product.ProductPrice ?? null,
    ProductCategory: product.ProductCategory ?? null,
    ProductImage: product.ProductImage ? {
      url: product.ProductImage.url,
      name: product.ProductImage.name
    } : null
  };
}

export async function getProductById(productId: string) {
  const product = await xata.db.PRODUCTS.read(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  return serializeProduct(product);
}

export async function updateProduct(productId: string, data: {
  ProductName?: string;
  ProductPrice?: string;
  ProductCategory?: string;
}): Promise<UpdateProductResult> {
  try {
    const updated = await xata.db.PRODUCTS.update({
      id: productId,
      ...data
    });

    if (!updated) {
      return { success: false, error: 'Product not found' };
    }
    return { success: true, data: serializeProduct(updated) };
  } catch (error) {
    console.error('Update error:', error);
    return { success: false, error: String(error) };
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const records = await xata.db['PRODUCT-CATEGORIES'].getMany();
    return records
      .map(category => ({
        id: category?.id ?? '',
        name: category?.CategoryName ?? ''
      }))
      .filter((category): category is Category => {
        return category.id !== '' && category.name !== '';
      });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
