import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Edit Business Menu',
  description: 'Edit the menu for the selected business',
};

export default function EditBusinessMenuPage({
  params: { businessName },
}: {
  params: { businessName: string };
}) {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Edit Product: {businessName}</h1>
    </div>
  );
}
