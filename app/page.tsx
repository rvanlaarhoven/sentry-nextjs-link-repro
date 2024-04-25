import Link from "next/link";
import { Suspense } from "react";

async function Links() {
  const response = await fetch("https://api.tcgdex.net/v2/en/sets");
  const data = (await response.json()) as { id: string; name: string }[];
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/items/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <Suspense>
      <Links />
    </Suspense>
  );
}
