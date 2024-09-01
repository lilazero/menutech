// nje protected route eshte nje component qe kontrollon nese nje user eshte loguar ose jo
// pse me merzit 😢
'use server';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function ProtectedRoute({ children }: Readonly<{ children: React.ReactNode }>) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    //stupid copilot
  if (user) {
    return <>{children}</>;
  }
  else
  {
    return(<h1>Sje i loguar</h1>);
  }
}
//gjithmon harroj eksportin

export default ProtectedRoute;