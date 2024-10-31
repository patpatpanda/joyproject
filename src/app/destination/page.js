// src/app/destination/page.js
import Link from 'next/link';

export default function DestinationOverview() {
  return (
    <main>
      <h1>Våra Destinationer</h1>
      <ul>
        <li>
          <Link href="/destination/italy">Italien</Link>
        </li>
        {/* Lägg till fler destinationer när de skapas */}
      </ul>
    </main>
  );
}
