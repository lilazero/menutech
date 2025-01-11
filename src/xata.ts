// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "PRODUCTS",
    columns: [
      { name: "ProductName", type: "text", defaultValue: "Pa Emer" },
      { name: "ProductCreator", type: "text" },
      { name: "ProductPrice", type: "text", defaultValue: "0" },
      { name: "ProductImage", type: "file" },
      {
        name: "ProductCategory",
        type: "text",
        notNull: true,
        defaultValue: "Misc.",
      },
    ],
  },
  {
    name: "BUSINESSES",
    columns: [
      { name: "BusinessName", type: "text" },
      { name: "BusinessType", type: "text", defaultValue: "noType" },
      { name: "BusinessLogoLink", type: "text" },
      {
        name: "BusinessEmail",
        type: "text",
        notNull: true,
        defaultValue: "null",
      },
    ],
  },
  {
    name: "PRODUCT-CATEGORIES",
    columns: [{ name: "CategoryName", type: "text" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Products = InferredTypes["PRODUCTS"];
export type ProductsRecord = Products & XataRecord;

export type Businesses = InferredTypes["BUSINESSES"];
export type BusinessesRecord = Businesses & XataRecord;

export type ProductCategories = InferredTypes["PRODUCT-CATEGORIES"];
export type ProductCategoriesRecord = ProductCategories & XataRecord;

export type DatabaseSchema = {
  PRODUCTS: ProductsRecord;
  BUSINESSES: BusinessesRecord;
  "PRODUCT-CATEGORIES": ProductCategoriesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Andi-Lilaj-s-workspace-s9rdlr.eu-central-1.xata.sh/db/menutech",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
