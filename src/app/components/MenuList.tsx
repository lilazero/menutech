import { getXataClient } from '@/xata';
export default async function MenuList({ params }: any) {
  const xata = getXataClient();
  const creator = await xata.db.BUSINESSES.filter({
    BusinessName: params,
  }).getFirst();

  if (!creator) {
    return <p>Creator not found</p>;
  }

  return (
    <div>
      MenuList.tsx
      <h1>{creator.BusinessName}</h1>
      <p>{creator.BusinessType}</p>
    </div>
  );
}
