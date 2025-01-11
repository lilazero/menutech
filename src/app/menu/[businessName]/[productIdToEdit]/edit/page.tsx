import ProtectedRoute from '@/components/ProtectedRoute';
import { Product } from '@/components/ui/Product';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getProductAction, getCategoriesAction } from '@/lib/actions/product';
import Link from 'next/link';
import { ProductData, Category, isValidCategory } from '@/types/product';
import { notFound } from 'next/navigation';

interface EditMenuPageProps {
  params: {
    productIdToEdit: string;
    businessName: string;
  }
}

export default async function EditMenuPage({ params }: EditMenuPageProps) {
  try {
    const [product, rawCategories] = await Promise.all([
      getProductAction(params.productIdToEdit),
      getCategoriesAction()
    ]);

    // Validate categories
    const categories = rawCategories.filter(isValidCategory);

    if (!product || !Array.isArray(categories)) {
      notFound();
    }

    return (
      <ProtectedRoute>
        <div className='h-full'>
          <Card>
            <CardHeader>
              <CardTitle>Edit Menu Item</CardTitle>
              <CardDescription>Make changes to your menu item</CardDescription>
            </CardHeader>
            <CardContent>
              <Product initialProduct={product} categories={categories} />
            </CardContent>
            <CardFooter>
              <Link href={`/menu/${params.businessName}`}>Back to Menu</Link>
            </CardFooter>
          </Card>
        </div>
      </ProtectedRoute>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }
}
