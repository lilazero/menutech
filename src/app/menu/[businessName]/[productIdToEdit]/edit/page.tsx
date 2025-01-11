import ProtectedRoute from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/card';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edit Menu',
  description: 'Edit your menu items here',
};

export default function EditMenuPage() {
  return (
    <ProtectedRoute>

    <div className='h-full'>
      <main>
        <Card>

        <h1>Edit Menu</h1>
        <p>Welcome to the menu editing page.</p>

        <Link href='/'>Go back to Homepage</Link>
        </Card>
      </main>
    </div>
    </ProtectedRoute>
  );
}
