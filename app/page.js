import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Week 2 Assignment</Link>
      </p>
      <li>
        <Link href="/week-3">Week 3</Link>
      </li>
      <li>
      <Link href="/week-4">Week 4</Link>
      </li>
      <li>
        <Link href="/week-5">Week 5</Link>
      </li>
    </main>
  );
}