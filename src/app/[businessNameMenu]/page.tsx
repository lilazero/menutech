// app/[id]/page.tsx

interface Props {
  params: {
    id: string;
  };
}

export default function DynamicPage({ params }: { params: { slug: string } }) {


  return <div>Faqja e: {params.slug}</div>;
}
