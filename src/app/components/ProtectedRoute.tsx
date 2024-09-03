import { auth } from '@clerk/nextjs/server';

export default async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  auth().protect();

  return <>{children}</>;
}
