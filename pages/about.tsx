import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { ChevronLeft } from "react-feather";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ScrapbookAboutPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`About – Scrapbook – Blair Hack Club`}</title>
        {/* <meta name="description" content="by @linkai101 on github" /> */}
      </Head>

      <Navbar/>

      <header className="px-8 pt-20 pb-4 container max-w-6xl flex flex-col gap-6">
        <div className="flex items-end gap-4">
          <Link href="/" passHref>
            <a className="hover:underline underline-offset-2">
              <span className="flex items-center gap-0.5 text-neutral-300 font-bold">
                <ChevronLeft size={20} /> back
              </span>
            </a>
          </Link>
        </div>
      </header>

      <main className="container max-w-4xl px-8 pb-8 pt-4">
        <h1 className="text-5xl text-amber-400 font-fancy leading-tight mb-2">
          About Scrapbook
        </h1>
        <p>
          This is a scrapbook for BlairHacks_6, from March 25-26, where hackers can send updates on whatever they&apos;re doing with their team.
          From screenshots of progress, to selfies, to much much more, this is a place for anything BlairHacks_6 related and beyond.
          <br />
          <br />
          <span className="font-medium">
            Let&apos;s create, together!
          </span>
        </p>
        <h2 className="text-3xl mt-12 mb-2 font-bold">
          Cool, so how do I join?
        </h2>
        <p>
          In order to post, you need to join the{" "}
          <a
            href="https://discord.gg/Sr9NcmytWy"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-amber-400 font-fancy italic leading-tight hover:underline underline-offset-2"
          >
            BlairHacks_6 Discord
          </a>
          . A post is automatically generated when you send a message
          to the{" "}
          <span className="bg-zinc-800 p-0.5 text-amber-200">
            #scrapbook
          </span>
          . Just attach an image or video of your choice, add a
          caption, and send your message!
          <img
            className="object-contain w-full max-w-xl my-4 mx-auto"
            alt="A scrapbook post about to be sent"
            src="/assets/scrapbook/about/examplepost.png"
          />
          After sending the message, Scrappy should automatically
          confirm that your post has been uploaded!
        </p>
        <h2 className="text-3xl mt-12 mb-2 font-bold">
          Scrappy (the Discord bot)
        </h2>
        <p>
          Scrappy, handles everything from uploading your
          post to changing your username. Check out the available
          commands below!
          <details>
            <summary className="text-amber-400 font-fancy italic leading-tight hover:underline underline-offset-2 cursor-pointer my-4">
              <span className="font-medium">Commands</span>
            </summary>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-medium">
                  /scrappy setusername
                </span>{" "}
                - change your username on the scrapbook
              </li>{" "}
              <li>
                <span className="font-medium">
                  /scrappy setavatar
                </span>{" "}
                - change your avatar on the scrapbook
              </li>
            </ul>
          </details>
        </p>
      </main>

      <Footer />
    </>
  );
}