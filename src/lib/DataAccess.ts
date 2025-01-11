'use server';
import { getXataClient, XataClient } from '@/xata';
import { ProductData, Category, isValidCategory } from '@/types/product';
import { ProductService } from './services/productService';

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main',
});

const productService = new ProductService(xata);

type UpdateProductResult = {
  success: true;
  data: ProductData;
} | {
  success: false;
  error: string;
};

export async function getBusinessEmailByBusinessName(params: {
  businessName: string;
}) {
  const records = await xata.db.BUSINESSES.filter({
    BusinessEmail: params.businessName,
  }).getMany();
  return records;
}

export async function getProductsByBusinessName(params: {
  businessName: string;
}) {
  const records = await xata.db.PRODUCTS.filter({
    ProductCreator: params.businessName,
  }).getMany();

  return records;
}

export async function getProductById(productId: string) {
  return await productService.getProduct(productId);
}

export async function updateProduct(productId: string, data: {
  ProductName?: string;
  ProductPrice?: string;
  ProductCategory?: string;
}): Promise<UpdateProductResult> {
  return await productService.updateProduct(productId, data);
}

export async function getCategories(): Promise<Category[]> {
  return await productService.getCategories();
}

export async function getProduct(id: string): Promise<ProductData> {
  return await productService.getProduct(id);
}
