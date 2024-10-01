'use server';
import { getXataClient, XataClient } from '@/xata';

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: 'main',
});

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
