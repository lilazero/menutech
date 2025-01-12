import { auth } from '@clerk/nextjs/server';

export default async function ProductEditProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { has } = auth();
  const isSitechAdmin= has({ role: 'org:sitech_admin' });
  if (isSitechAdmin) {
    return <>{children}</>;
  } else {
    return null;
  }
}