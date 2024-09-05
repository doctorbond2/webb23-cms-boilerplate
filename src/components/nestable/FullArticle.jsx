import { storyblokEditable } from '@storyblok/react';
import RichTextDefault from './RichText';
import SBImage from './SBImage';
import Link from 'next/link';

export default function FullArticle({ blok }) {
  console.log('blok', blok.article[0]);
  const full_article = blok.article[0];
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
          <RichTextDefault blok={{ richtext: full_article.richtext }} />
        </div>

        <div
          id="article-right-section"
          className="w-full md:w-1/2 p-6 lg:flex justify-center items-center bg-white border rounded-md lg:h-[400px] lg:w-[500px] lg:mr-44 md:grid"
        >
          <div className="max-w-[80%] mx-auto">
            <SBImage
              blok={full_article.image}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
