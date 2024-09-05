import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ blok }) {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="bg-slate-500 py-6 mt-8 border-none rounded-lg"
    >
      <div className="container mx-auto flex justify-center items-center h-full max-w-screen-lg">
        <Image
          src={blok.logo.filename}
          alt="Logo"
          className="w-24 h-24 mr-4"
          width={95}
          height={48}
        />
        <Link href={blok.link.cached_url} className="text-white text-lg">
          {blok.link_text}
        </Link>
      </div>
    </footer>
  );
}
