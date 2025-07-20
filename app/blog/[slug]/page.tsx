type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = ['hello-world', 'nextjs-guide', 'van-an'];

  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <><h1>Slug: {params.slug}</h1>NguyenVanAnit</>;
}
