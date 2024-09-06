// src/lib/xataQueries.ts

import { XataClient } from '@/xata';
import { XataApiClient } from '@xata.io/client';

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main',
});

export async function getProduktet() {
  const records = await xata.db.Produktet.getAll();
  return records;
}

export async function getProduktetById(id: string) {
  const record = await xata.db.Produktet.read(id);
  return record;
}
export function getProductByCreator(creatorName: string) {
  const record = xata.db.productCreator.read(creatorName);
  return record;
}

export async function getProduktetByProductName(productName: string) {
  const records = await xata.db.Produktet.read(productName);
  {
    return records;
  }
}
