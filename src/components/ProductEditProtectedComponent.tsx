import { auth } from '@clerk/nextjs/server';

export default async function ProductEditProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { has } = auth();
  const canEdit = has({ permission: 'org:product:edit' });
  if (canEdit) {
    return <>{children}</>;
  } else {
    return null;
  }
}
