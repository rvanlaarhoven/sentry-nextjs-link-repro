export const runtime = "edge";
export const revalidate = 43200;

async function fetchData(id: string) {
  const response = await fetch(`https://api.tcgdex.net/v2/en/sets/${id}`);
  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchData(params.slug);
  return <main>{data?.name}</main>;
}
