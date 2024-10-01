import { auth } from '@clerk/nextjs/server';

export default async function ProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, has } = auth();
  const canEdit = has({ permission: 'org:product:edit' });
  if (canEdit) {
    return <>{children}</>;
  } else {
    return null;
  }
}
