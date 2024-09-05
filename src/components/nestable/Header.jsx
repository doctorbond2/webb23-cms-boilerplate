import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ blok }) {
  const logo = blok.logo[0];
  return (
    <header
      {...storyblokEditable(blok)}
      className="bg-slate-500 border-none rounded-lg mb-8"
    >
      <nav className="flex justify-between items-center p-4 font-semibold text-lg">
        <Link
          href="/home"
          id="header-left-section-wrapper"
          className="max-w-[200px] flex-shrink-0"
        >
          <Image
            className="ml-14"
            src={logo.uri.filename}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </Link>

        <div id="header-right-section-wrapper">
          <ul className="justify-end lg:flex lg:space-x-24 sm:grid mr-24">
            {blok.links.map((link) => (
              <li key={link._uid}>
                <Link href={link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
