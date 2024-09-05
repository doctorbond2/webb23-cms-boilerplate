import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import SBImage from './SBImage';
import Link from 'next/link';

export default function Article({ blok }) {
  return (
    <article {...storyblokEditable(blok)}>
      <div
        className="border border-none bg-slate-500 lg:flex md:grid  p-4 rounded-lg justify-between"
        id="article-wrapper"
      >
        <div
          id="article-left-section"
          className="flex flex-col justify-between"
        >
          <RichTextDefault blok={{ richtext: blok.richtext }} />
          {blok.link && (
            <Link
              href={blok.link.cached_url}
              className="inline-block px-6 py-3 text-white rounded-lg hover:bg-slate-800 transition-colors"
              style={{ width: 'fit-content' }}
            >
              {blok.link_button_name}
            </Link>
          )}
        </div>

        <div
          id="article-right-section"
          className="w-full md:w-1/2 p-6 lg:flex justify-center items-center bg-white border rounded-md lg:h-[400px] lg:w-[500px] lg:mr-44 md:grid"
        >
          <div className="max-w-[80%] mx-auto">
            <SBImage
              blok={blok.image}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
