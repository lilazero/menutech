// src/lib/xataQueries.ts

import { XataClient } from '@/xata';

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main',
});

export async function getProduktet() {
  const records = await xata.db.PRODUCTS.getAll();
  return records;
}

export async function getProductsById(id: string) {
  const record = await xata.db.PRODUCTS.read(id);
  return record;
}
export function getProductByCreator(name: string) {
  const record = xata.db.BUSINESSES.read(name);
  return record;
}

export async function getProductsByProductName(productName: string) {
  const records = await xata.db.PRODUCTS.read(productName);
  {
    return records;
  }
}
