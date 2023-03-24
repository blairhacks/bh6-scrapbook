import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-4 container max-w-6xl flex justify-between items-center gap-8">
      <p className="text-sm">
        © 2023 BlairHacks.
      </p>
      <Link href="https://6.blairhacks.com" passHref>
        <a>
          <img src="/assets/logo_mono.png" className="h-8"/>
        </a>
      </Link>
    </footer>
  );
}
