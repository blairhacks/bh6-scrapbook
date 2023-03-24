import React from 'react';
import Link from 'next/link';

import { GitHub } from 'react-feather';

export default function Navbar(props) {
  const { type='default' }:{ type: 'default' | 'scrapbook' } = props;

  return <>
    <div className="fixed top-0 inset-x-0 z-30">
      <nav className="px-4 py-6 container max-w-6xl flex justify-end relative gap-12">
        <div className="flex justify-center items-center gap-5 text-sm font-bold uppercase">
          <a className="text-neutral-400/60 hover:text-inherit cursor-pointer transition duration-150 hover:scale-105" href="https://github.com/blairhacks/bh6-scrapbook" target="_blank" rel="noopener noreferrer">
            <GitHub size={20}/>
          </a>
          <a className="cursor-pointer" href="" target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-1 bg-neutral-400/60 hover:bg-amber-400 text-theme-background rounded-full font-black uppercase transition duration-150 hover:scale-105">
              Post
            </button>
          </a>
        </div>
      </nav>
    </div>
  </>;
}
