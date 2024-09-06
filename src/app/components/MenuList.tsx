import { getXataClient } from '@/xata';
export default async function MenuList({ params }: any) {
  const xata = getXataClient();
  const creator = await xata.db.productCreator
    .filter({
      productCreatorName: params,
    })
    .getFirst();

  if (!creator) {
    return <p>Creator not found</p>;
  }

  return (
    <div>
      MenuList.tsx
      <h1>{creator.productCreatorName}</h1>
      <p>{creator.creatorType}</p>
    </div>
  );
}
