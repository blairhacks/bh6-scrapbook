import React from 'react'

export default function Footer() {
  return (
    <footer className="p-4 container max-w-6xl flex justify-between items-center gap-8">
      <p className="text-sm">
        © 2021-2022 Blair Hack Club.
      </p>
      <img src="/assets/flag-standalone.svg" className="h-8"/>
    </footer>
  );
}
